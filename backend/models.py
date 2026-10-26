from sqlalchemy import Column, Date, Integer, String, Float, Text, DateTime, ForeignKey, Enum
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from database import Base
import enum

class User(Base):
    __tablename__ = "users"
 
    user_id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    role = Column(String, nullable=False)
    phone_number = Column(String, nullable=True)
    created_at = Column(DateTime, server_default=func.now())
 
    mosques = relationship("Mosque", back_populates="takmir")
    ledger_entries = relationship("TransactionLedger", back_populates="user")
 
 
class Mosque(Base):
    __tablename__ = "mosques"
 
    mosque_id = Column(Integer, primary_key=True, index=True)
    takmir_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    mosque_name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    city = Column(String, nullable=False)
    bank_account_number = Column(String, nullable=False)
    created_at = Column(DateTime, server_default=func.now())
 
    takmir = relationship("User", back_populates="mosques")
    proposals = relationship("Proposal", back_populates="mosque")


class ProposalStatus(str, enum.Enum):
    PENDING= "pending" # kampanye belum di daftarkan
    ACTIVE= "active" # kampanye aktif dan CNN berhasil mendeteksi kerusakan
    REJECTED= "rejected" # kampanye ditolak dan CNN tidak berhasil mendeteksi kerusakan
    FUNDED= "funded" # kampanye selesai dan dana terkumpul


class Proposal(Base):
    __tablename__ = "proposals"
 
    proposal_id = Column(Integer, primary_key=True, index=True)
    mosque_id = Column(Integer, ForeignKey("mosques.mosque_id"), nullable=False)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    target_amount = Column(Float, nullable=False)
    collected_amount = Column(Float, default=0, nullable=False)
    damage_photo_url = Column(String, nullable=True)
    cnn_label = Column(String, nullable=True)
    cnn_confidence = Column(Float, nullable=True)
    end_date = Column(Date, nullable=False)
    status = Column(Enum(ProposalStatus, values_callable=lambda e: [m.value for m in e]), default=ProposalStatus.PENDING, nullable=False)
    created_at = Column(DateTime, server_default=func.now())
 
    mosque = relationship("Mosque", back_populates="proposals")
    ledger_entries = relationship("TransactionLedger", back_populates="proposal")


class TransactionLedger(Base):
    __tablename__ = "transaction_ledger"
 
    ledger_id = Column(Integer, primary_key=True, index=True)
    proposal_id = Column(Integer, ForeignKey("proposals.proposal_id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    transaction_type = Column(String, nullable=False)
    amount = Column(Float, nullable=False)
    description = Column(String, nullable=True)
    receipt_photo_url = Column(String, nullable=True)
    receipt_hash = Column(String, nullable=False)
    previous_hash = Column(String, nullable=False)
    current_hash = Column(String, nullable=False)
    timestamp = Column(DateTime, server_default=func.now())
 
    proposal = relationship("Proposal", back_populates="ledger_entries")
    user = relationship("User", back_populates="ledger_entries")
