from pydantic import BaseModel


class RegisterUserRequest(BaseModel):
    id: str
    email: str
    first_name: str
    last_name: str
