from fastapi import FastAPI, HTTPException, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import security

app = FastAPI(
    title="PeduliMasjid API Engine",
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

@app.get("/")
def root():
    return {"status": "Online", "service": "PeduliMasjid Core API"}

@app.get("/api/v1/ledger", tags=["Ledger"])
def get_ledger():
    """Mengambil seluruh daftar blok transaksi di buku kas."""
    return {"total_blocks": len(LEDGER_DB), "blocks": LEDGER_DB}

@app.post("/api/v1/ledger/record-expense", tags=["Ledger"])
async def record_expense(
    amount: float = Form(...),
    description: str = Form(...),
    receipt_file: UploadFile = File(...)
):
    """
    Mencatat pengeluaran kas belanja fisik, menghitung SHA-256 berkas nota,
    lalu merantainya ke blok transaksi sebelumnya.
    """
    try:
        file_bytes = await receipt_file.read()
        evidence_hash = security.hash_file_bytes(file_bytes)
        
        last_block = LEDGER_DB[-1]
        new_index = len(LEDGER_DB)
        new_timestamp = datetime.utcnow().isoformat() + "Z"
        prev_hash = last_block["current_hash"]
        
        current_hash = security.calculate_hash(
            index=new_index,
            timestamp=new_timestamp,
            transaction_type="EXPENSE",
            amount=amount,
            evidence_hash=evidence_hash,
            previous_hash=prev_hash
        )
        
        new_block = {
            "index": new_index,
            "timestamp": new_timestamp,
            "transaction_type": "EXPENSE",
            "amount": amount,
            "description": description,
            "evidence_hash": evidence_hash,
            "previous_hash": prev_hash,
            "current_hash": current_hash
        }
        
        LEDGER_DB.append(new_block)
        return {
            "status": "Success",
            "message": "Transaksi berhasil dirantai ke buku besar kriptografis",
            "block": new_block
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Gagal memproses transaksi: {str(e)}")

@app.get("/api/v1/ledger/verify", tags=["Ledger"])
def verify_ledger():
    """Melakukan audit keutuhan buku kas dari awal hingga akhir."""
    return security.verify_chain_integrity(LEDGER_DB)