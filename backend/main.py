from typing import List
 
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
 
import models
import schemas
from database import engine, get_db
from security import get_current_user, require_takmir

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
PUBLIC_STATUSES = ["active", "completed"]

# Campaign
@app.get("/api/v1/campaigns", tags=["Campaign"], response_model = schemas.ProposalResponse)
def get_all_active_campaigns(skip: int = 0, limit: int = 20, db: Session = Depends(get_db)):
    """ Daftar seluruh campanye aktif """
    return (
        db.query(models.Proposal)
        .filter(models.Proposal.status == "active")
        .order_by(models.Proposal.created_at.desc())
        .offset(skip)
        .limit(limit)
        .all()
    )

@app.get("/api/v1/campaigns/mine", tags=["Campaign"], response_model = schemas.ProposalResponse)
def get_my_campaings(current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    """Semua campaign milik takmir yang login (semua status)"""
    return (
        db.query(models.Proposal)
        .join(models.Proposal, models.Proposal.mosque_id == models.Mosque.mosque_id)
        .filter(models.Mosque.takmir_id == current_user.user_id)
        .order_by(models.Proposal.created_at.desc())
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
        .filter(
            models.Mosque.mosque_id == data.mosque_id,
            models.Mosque.takmir_id == current_user.user_id,
        )
        .first()
    )
    if not mosque:
        raise HTTPException(status_code=404, detail="Masjid tidak ditemukan")
 
    proposal = models.Proposal(
        **data.model_dump(),
        collected_amount=0,
        status="active",  # sementara, nanti ditentukan hasil klasifikasi foto
    )
    db.add(proposal)
    db.commit()
    db.refresh(proposal)
    return proposal

@app.patch("/api/v1/campaigns/{campaign_id}/status", tags=["Campaign"], response_model=schemas.ProposalResponse,)
def update_campaign_status(campaign_id: int, data: schemas.ProposalStatusUpdate, current_user: models.User = Depends(require_takmir), db: Session = Depends(get_db)):
    """Takmir menutup campaign miliknya"""
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
 
    if str(campaign.status) != "active":
        raise HTTPException(status_code=400, detail="Hanya campaign aktif yang bisa ditutup")
 
    campaign.status = data.status
    db.commit()
    db.refresh(campaign)
    return campaign

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
