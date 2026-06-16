from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)

    applications = relationship("JobApplication", back_populates="owner")

class JobApplication(Base):
    __tablename__ = "job_applications"

    id = Column(Integer, primary_key=True, index=True)
    company = Column(String, index=True, nullable=False)
    role = Column(String, index=True, nullable=False)
    status = Column(String, default="Applied") # Options: Applied, Interview, Offer, Rejected
    user_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="applications")
