from pydantic import BaseModel, ConfigDict, EmailStr
from datetime import date, datetime
from typing import Optional, Literal

# ==========================================
# 1. USER & AUTH SCHEMAS
# ==========================================
class UserBase(BaseModel):
    full_name: str
    email: EmailStr
    phone_number: Optional[str] = None

class UserCreate(UserBase):
    password: str
    role: Optional[Literal["takmir", "donatur"]] = "donatur"

class UserSimpleResponse(UserBase):
    """Skema ringkas user untuk relasi nested di Mosque/Proposal"""
    user_id: int
    role: Literal["takmir", "donatur"]

    model_config = ConfigDict(from_attributes=True)

class UserResponse(UserBase):
    user_id: int
    role: Literal["takmir", "donatur"]
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    user_id: Optional[int] = None
    role: Optional[str] = None


# ==========================================
# 2. MOSQUE SCHEMAS
# ==========================================
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
    takmir: Optional[UserSimpleResponse] = None  # Sertakan data takmir pengelola
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


# ==========================================
# 3. PROPOSAL / CAMPAIGN SCHEMAS
# ==========================================
ProposalStatusType = Literal["pending", "active", "rejected", "funded"]

class ProposalBase(BaseModel):
    title: str
    description: str
    target_amount: float

class ProposalCreate(ProposalBase):
    damage_photo_url: Optional[str] = None
    cnn_label: Optional[str] = None
    cnn_confidence: Optional[float] = None
    end_date: date
    status: Optional[ProposalStatusType] = "pending"

class ProposalResponse(ProposalBase):
    proposal_id: int
    mosque_id: int
    collected_amount: float
    damage_photo_url: Optional[str] = None
    cnn_label: Optional[str] = None
    cnn_confidence: Optional[float] = None
    end_date: Optional[date] = None
    status: ProposalStatusType
    mosque: Optional[MosqueResponse] = None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


# ==========================================
# 4. TRANSACTION LEDGER SCHEMAS
# ==========================================
TransactionType = Literal["DONATION", "EXPENSE", "IN", "OUT"]

class LedgerCreate(BaseModel):
    proposal_id: int
    transaction_type: TransactionType
    amount: float
    description: str
    receipt_photo_url: Optional[str] = None  # Ditambahkan untuk pencatatan pengeluaran takmir

class LedgerResponse(BaseModel):
    ledger_id: int
    proposal_id: int
    user_id: int
    transaction_type: str
    amount: float
    description: Optional[str] = None
    receipt_photo_url: Optional[str] = None
    receipt_hash: Optional[str] = None  # Opsional karena donasi masuk tidak punya nota
    previous_hash: str
    current_hash: str
    timestamp: datetime

    model_config = ConfigDict(from_attributes=True)