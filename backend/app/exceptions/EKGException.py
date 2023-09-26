from abc import abstractmethod
from enum import Enum


class EKGExceptionCode(Enum):
    BAD_REQUEST = 400
    TEMP_PW_EMAIL_NOT_SENT = 4002


class EKGException(Exception):
    def __init__(self, code: Enum, message: str):
        self.code = code
        self.message = message

    @abstractmethod
    def __str__(self):
        pass

    @abstractmethod
    def __repr__(self):
        pass
