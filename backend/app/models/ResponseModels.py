from pydantic import BaseModel


class RegisterUserResponse(BaseModel):
    status: int
