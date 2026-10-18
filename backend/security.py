from datetime import datetime, timezone, timedelta
import hashlib
from typing import List, Dict, Any
import os
from dotenv import load_dotenv
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from fastapi import Depends, HTTPException, status
from database import get_db
import models
from sqlalchemy.orm import Session
import bcrypt

load_dotenv()
_secret = os.getenv("SECRET_KEY")
_algorithm = os.getenv("ALGORITHM", "HS256")
_expire = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 60))

if not _secret or not _algorithm or not _expire:
    raise RuntimeError("Konfigurasi secret key / algorithm / token expire belum lengkap di file .env")

SECRET_KEY: str = _secret
ALGORITHM: str = _algorithm
ACCESS_TOKEN_EXPIRE_MINUTES: int = int(_expire)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")

def create_access_token(user_id: int) -> str:
    expire = datetime.now(timezone.utc) + timedelta(minutes = ACCESS_TOKEN_EXPIRE_MINUTES)
    payload = {"sub": str(user_id), "exp": expire}
    return jwt.encode(payload, SECRET_KEY, algorithm= ALGORITHM)

def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)) -> models.User:
    credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail = "Token tidak valid atau kadaluarsa", headers = {"WWW-Authenticate" : "Bearer"})

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms = [ALGORITHM])
        user_id = payload.get("sub")
        if user_id is None:
            raise credentials_exception
    except (JWTError, ValueError):
        raise credentials_exception
    
    user = db.query(models.User).filter(models.User.user_id == int(user_id)).first()
    if user is None:
        raise credentials_exception
    return user

def require_takmir(current_user: models.User = Depends(get_current_user)) -> models.User:
    if str(current_user.role) != "takmir":
        raise HTTPException(
            status_code = status.HTTP_403_FORBIDDEN,
            detail = "Hanya takmir yang boleh mengakses"
        )
    return current_user

def calculate_hash(index: int, timestamp: str, transaction_type: str, amount: int, evidence_hash: str, previous_hash: str) -> str:
    """
    Menghitung hash SHA-256 dari payload transaksi kas.
    Rumus -> SHA-256(index + timestamp + transaction_type + amount + evidence_hash + previous_hash)
    """
    payload = f"{index}{timestamp}{transaction_type}{amount}{evidence_hash}{previous_hash}"
    return hashlib.sha256(payload.encode("utf-8")).hexdigest()

def hash_file_bytes(file_bytes: bytes) -> str:
    """
    Menghitung hash SHA-256 dari byte data bukti fisik (nota kuitansi / foto).
    """
    return hashlib.sha256(file_bytes).hexdigest()

def verify_chain_integrity(ledger: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    Memverifikasi seluruh rantai ledger transaksi dari Genesis Block hingga blok terakhir.
    """
    if not ledger or len(ledger) <= 1:
        return {"is_valid": True, "message": "Ledger masih berisi Genesis block saja / valid"}

    for i in range(1, len(ledger)):
        curr_block = ledger[i]
        prev_block = ledger[i - 1]

        # 1. Verifikasi keterikatan rantai (previous_hash blok ini == current_hash blok sebelumnya)
        if curr_block["previous_hash"] != prev_block["current_hash"]:
            return {
                "is_valid": False,
                "broken_at_index": i,
                "reason": f"Rantai terputus pada blok {i}. Previous hash tidak cocok dengan current hash sebelumnya."
            }

        # 2. Rekalkulasi integritas isi data transaksi
        recalculated_hash = calculate_hash(
            index=curr_block["index"],
            timestamp=curr_block["timestamp"],
            transaction_type=curr_block["transaction_type"],
            amount=curr_block["amount"],
            evidence_hash=curr_block["evidence_hash"],
            previous_hash=curr_block["previous_hash"]
        )

        if recalculated_hash != curr_block["current_hash"]:
            return {
                "is_valid": False,
                "broken_at_index": i,
                "reason": f"Data terbukti dimanipulasi pada blok {i}!"
            }

    return {"is_valid": True, "message": "Seluruh rantai ledger valid dan utuh (Tamper-evident verified)"}

def hash_password(password: str) -> str:
    """Hashing password user menggunakan bcrypt"""
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Memverifikasi password user"""
    return bcrypt.checkpw(plain_password.encode("utf-8"), hashed_password.encode("utf-8"))