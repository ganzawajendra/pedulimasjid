from datetime import timedelta, datetime
from typing import List
 
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
 
import models
import schemas
from database import engine, get_db
from security import create_access_token, get_current_user, hash_password, require_takmir, verify_password

models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="PeduliMasjid API",
    description="Backend API untuk Verifikasi CNN dan Cryptographic Hash Chain",
    version="1.0.0"
)

# Konfigurasi CORS agar frontend Next.js dapat berkomunikasi
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Buku Besar In-Memory Sementara (Blok Pertama: Genesis Block)
LEDGER_DB = [
    {
        "index": 0,
        "timestamp": "2026-09-25T00:00:00Z",
        "transaction_type": "GENESIS",
        "amount": 0.0,
        "description": "Genesis Block",
        "evidence_hash": "0" * 64,
        "previous_hash": "0" * 64,
        "current_hash": "0000000000000000000000000000000000000000000000000000000000000000"
    }
]

# Status Publik
PUBLIC_STATUSES = [models.ProposalStatus.ACTIVE, models.ProposalStatus.FUNDED]

# Campaign
@app.get("/api/v1/campaigns", tags=["Campaign"], response_model=List[schemas.ProposalResponse])
def get_all_active_campaigns(skip: int = 0, limit: int = 20, db: Session = Depends(get_db)):
    """ Daftar seluruh campanye aktif """
    return (
        db.query(models.Proposal)
        .filter(models.Proposal.status == models.ProposalStatus.ACTIVE)
        .order_by(models.Proposal.created_at.desc())
        .offset(skip)
        .limit(limit)
        .all()
    )

@app.get("/api/v1/campaigns/mine", tags=["Campaign"], response_model=List[schemas.ProposalResponse])
def get_my_campaings(current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    """Semua campaign milik takmir yang login (semua status)"""
    mosque = db.query(models.Mosque).filter(models.Mosque.takmir_id == current_user.user_id).first()
    if not mosque:
        return []

    return (
        db.query(models.Proposal)
        .filter(models.Proposal.mosque_id == mosque.mosque_id)
        .all()
    )

@app.get("/api/v1/campaigns/mine/{campaigns_id}", tags=["Campaign"], response_model = schemas.ProposalResponse)
def get_my_campaign(campaign_id: int, current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    """Detail satu campaign milik takmir (semua status)"""
    campaign = (
        db.query(models.Proposal)
        .join(models.Mosque, models.Proposal.mosque_id == models.Mosque.mosque_id)
        .filter(
            models.Proposal.proposal_id == campaign_id,
            models.Mosque.takmir_id == current_user.user_id,
        )
        .first()
    )
    if not campaign:
        raise HTTPException(status_code=404, detail="Campaign tidak ditemukan")
    return campaign

@app.get("/api/v1/campaigns/{campaign_id}", tags=["Campaign"], response_model=schemas.ProposalResponse)
def get_campaign_by_id(campaign_id: int, db: Session = Depends(get_db)):
    """Detail campaign publik berdasarkan ID"""
    campaign = (
        db.query(models.Proposal)
        .filter(
            models.Proposal.proposal_id == campaign_id,
            models.Proposal.status.in_(PUBLIC_STATUSES),
        )
        .first()
    )
    if not campaign:
        raise HTTPException(status_code=404, detail="Campaign tidak ditemukan")
    return campaign

@app.post("/api/v1/campaigns", tags=["Campaign"], response_model=schemas.ProposalResponse, status_code=201,)
def create_campaign(data: schemas.ProposalCreate, current_user: models.User = Depends(require_takmir), db: Session = Depends(get_db)):
    """Takmir membuat campaign untuk masjidnya (versi tanpa foto/ML)"""
    mosque = (
        db.query(models.Mosque)
        .filter(models.Mosque.takmir_id == current_user.user_id)
        .first()
    )
    if not mosque:
        raise HTTPException(status_code=404, detail="Masjid tidak ditemukan")

    if data.cnn_confidence is not None:
        if data.cnn_confidence >= 50.0:
            status = models.ProposalStatus.ACTIVE
        else:
            status = models.ProposalStatus.REJECTED
    else:
        status = models.ProposalStatus.PENDING

    proposal_data = data.model_dump()
    proposal_data.pop("status", None)

    proposal = models.Proposal(
        **proposal_data,
        collected_amount=0,
        # end_date = datetime.now() + timedelta(days= data.end_date),
        mosque_id = mosque.mosque_id,
        status = status
    )
    db.add(proposal)
    db.commit()
    db.refresh(proposal)
    return proposal

@app.patch("/api/v1/campaigns/{campaign_id}/end", tags=["Campaign"], response_model=schemas.ProposalResponse)
def end_campaign(proposal_id: int, current_user: models.User = Depends(require_takmir), db: Session = Depends(get_db)):
    """Takmir Mengakhiri Kampanye Manual"""
    proposal = (
        db.query(models.Proposal)
        .join(models.Mosque)
        .filter(
            models.Proposal.proposal_id == proposal_id,
            models.Mosque.takmir_id == current_user.user_id
        )
        .first()
    )

    if not proposal:
        raise HTTPException(status_code = 404, detail = "Kampanye tidak ditemukan")
    
    if proposal.status != models.ProposalStatus.ACTIVE:
        raise HTTPException(status_code = 400, detail = "Kampanye tidak sedang aktif")
    
    proposal.status = models.ProposalStatus.FUNDED
    db.commit()
    db.refresh(proposal)
    return proposal

# Mosque
@app.post("/api/v1/mosques", tags=["Mosque"], response_model=schemas.MosqueResponse, status_code=201,)
def register_mosque(data: schemas.MosqueCreate, current_user: models.User = Depends(require_takmir), db: Session = Depends(get_db)):
    """Takmir mendaftarkan masjidnya"""
    mosque = models.Mosque(
        **data.model_dump(),
        takmir_id=current_user.user_id,  # dari token, bukan dari client
    )
    db.add(mosque)
    db.commit()
    db.refresh(mosque)
    return mosque

@app.get("/api/v1/mosques/me", tags=["Mosque"], response_model=List[schemas.MosqueResponse],)
def get_my_mosques(current_user: models.User = Depends(require_takmir), db: Session = Depends(get_db)):
    """Daftar masjid milik takmir yang login"""
    return (
        db.query(models.Mosque)
        .filter(models.Mosque.takmir_id == current_user.user_id)
        .all()
    )

# Transaction Ledger
@app.get("/api/v1/transactions/ledger", tags=["Transaction"], response_model=List[schemas.LedgerResponse])
def get_my_transaction_ledger(current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    """Daftar transaksi donatur yang terhubung dengan proposal masjid takmir yang login"""
    mosque = db.query(models.Mosque).filter(models.Mosque.takmir_id == current_user.user_id).first()
    if not mosque:
        return []

    ledger_entries = (
        db.query(models.TransactionLedger)
        .join(models.Proposal)
        .filter(models.Proposal.mosque_id == mosque.mosque_id)
        .all()
    )
    return ledger_entries

# Auth
@app.post("/api/v1/auth/register", tags = ["Auth"], response_model = schemas.UserResponse, status_code = 201)
def register_user(data: schemas.UserCreate, db: Session = Depends(get_db)):
    """Daftar akun khusus takmir"""
    email = data.email.lower()
    existing_email = db.query(models.User).filter(models.User.email == email).first()
    if existing_email:
        raise HTTPException(status_code = 409, detail = "Email telah terdaftar")
    
    user = models.User(
        full_name = data.full_name,
        email = email,
        password_hash = hash_password(data.password),
        role = "takmir",
        phone_number = data.phone_number
    )

    db.add(user)
    db.commit()
    db.refresh(user)
    return user

@app.post("/api/v1/auth/login", tags = ["Auth"], response_model = schemas.Token)
def login_user(form: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    """Login takmir"""
    user = (
        db.query(models.User)
        .filter(models.User.email == form.username.lower())
        .first()
    )
    if not user or not verify_password(form.password, str(user.password_hash)):
        raise HTTPException(
            status_code = 401,
            detail = "Email atau password salah",
            headers = {"WWW-Authenticate" : "Bearer"}
        )
    
    token = create_access_token(int(user.user_id))
    return {
        "access_token" : token,
        "token_type" : "bearer"
    }

@app.get("/api/v1/auth/me", tags=["Auth"], response_model=schemas.UserResponse)
def get_me(current_user: models.User = Depends(get_current_user)):
    """Detail user yang sedang login"""
    return current_user