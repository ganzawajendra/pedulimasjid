from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Menggunakan SQLite lokal (berkas database pedulimasjid.db akan dibuat otomatis)
SQLALCHEMY_DATABASE_URL = "sqlite:///./pedulimasjid.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, 
    connect_args={"check_same_thread": False}  # Khusus SQLite
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Dependency untuk menyediakan sesi DB per HTTP request
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()