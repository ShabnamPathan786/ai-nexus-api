from pydantic import BaseModel

class DocumentRequest(BaseModel):
        title:str
        message:str


class DocumentResponse(BaseModel):
        id:int
        title:str
        message:str

        class config:
                from_attributes = True
