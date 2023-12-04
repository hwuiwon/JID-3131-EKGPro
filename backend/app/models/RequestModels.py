from fastapi import UploadFile
from pydantic import BaseModel


class RegisterUserRequest(BaseModel):
    id: str
    email: str
    first_name: str
    last_name: str
    org_id: str
    password: str

class UploadFileRequest(BaseModel):
    id: str
    file: UploadFile