from pydantic import BaseModel


class ErrorDTO(BaseModel):
    code: int
    message: str


class RegisterUserResponse(BaseModel):
    status: int