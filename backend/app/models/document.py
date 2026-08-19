from app.db.session import Base
from sqlalchemy import Column,Integer,String

class Documnet(Base):
    __tablename__="documents"

    id=Column(
        Integer,
        primary_key=True,
        index=True
    )

    title=Column(
        String,
        nullable=False
    )

    message=Column(
        String,
        nullable=False
    )


