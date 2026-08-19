from sqlalchemy.orm import Session
from app.models.document import Documnet
from app.schemas.document import DocumentRequest

def create_document(db:Session,document_data:DocumentRequest):
    document=Documnet(
        title=document_data.title,
        messsage=document_data.message
    )
    db.add(document)
    db.commit()
    db.refresh(document)
    return document
