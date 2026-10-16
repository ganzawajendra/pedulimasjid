from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, Literal


# ---------- User ----------
class UserBase(BaseModel):
    full_name: str
    email: EmailStr
    role: Literal["takmir", "donatur"]
    phone_number: Optional[str] = None

class UserCreate(UserBase):
    password: str  # mentahan dari form

class UserResponse(UserBase):
    user_id: int
    created_at: datetime

    class Config:
        from_attributes = True

# ---------- Auth ----------
class Token(BaseModel):
    access_token: str
    token_type: str

# ---------- Mosque ----------
class MosqueBase(BaseModel):
    mosque_name: str
    address: str
    city: str
    bank_account_number: str

class MosqueCreate(MosqueBase):
    pass

class MosqueResponse(MosqueBase):
    mosque_id: int
    takmir_id: int
    created_at: datetime

    class Config:
        from_attributes = True

# ---------- Proposal ----------
class ProposalBase(BaseModel):
    title: str
    description: str
    target_amount: float

class ProposalCreate(ProposalBase):
    mosque_id: int

class ProposalResponse(ProposalBase):
    proposal_id: int
    mosque_id: int
    collected_amount: float
    damage_photo_url: Optional[str] = None
    cnn_label: Optional[str] = None
    cnn_confidence: Optional[float] = None
    status: str
    created_at: datetime

    class Config:
        from_attributes = True

class ProposalStatusUpdate(BaseModel):
    status: Literal["completed", "closed"]

# ---------- Transaction Ledger ----------
class LedgerCreate(BaseModel):
    proposal_id: int
    transaction_type: str
    amount: float
    description: str

class LedgerResponse(BaseModel):
    ledger_id: int
    proposal_id: int
    user_id: int
    transaction_type: str
    amount: float
    description: Optional[str] = None
    receipt_photo_url: Optional[str] = None
    receipt_hash: str
    previous_hash: str
    current_hash: str
    timestamp: datetime

    class Config:
        from_attributes = True