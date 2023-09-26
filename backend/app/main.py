import sys
from http import HTTPStatus

from exceptions import EKGException, EKGExceptionCode
from fastapi import FastAPI, Request
from fastapi.encoders import jsonable_encoder
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from loguru import logger

logger.remove()
logger.add(
    sys.stderr,
    format=(
        "<green>{time:YYYY-MM-DD HH:mm:ss.SSS!UTC}</green> "
        "| <level>{level: <5}</level> | <cyan>{file}</cyan>:<cyan>{line}</cyan> "
        "<yellow>{function}</yellow> - <level>{message}</level>"
    ),
    level="INFO",
)


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.exception_handler(EKGException)
async def prism_api_exception_handler(request: Request, e: EKGException):
    return JSONResponse(
        status_code=EKGExceptionCode.BAD_REQUEST.value,
        content={"code": e.code.value, "message": e.message},
    )


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    return JSONResponse(
        status_code=HTTPStatus.UNPROCESSABLE_ENTITY.value,
        content=jsonable_encoder({"detail": exc.errors(), "body": exc.body}),
    )


@app.get("/")
async def root() -> dict:
    return {"message": "API Working"}
