from enum import Enum

from .EKGDBException import EKGException


class EKGIdentityExceptionCode(Enum):
    FAIL_CREATE_USER = 4001
    FAIL_DELETE_USER = 4002


class EKGIdentityException(EKGException):
    def __init__(self, code: EKGIdentityExceptionCode, message: str):
        self.code = code
        self.message = message

    def __str__(self):
        return f"EKGIdentityException: [{self.code.value}] {self.code.name}: {self.message}"

    def __repr__(self):
        return f"EKGIdentityException: [{self.code.value}] {self.code.name}: {self.message}"
