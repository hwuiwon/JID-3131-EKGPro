from http import HTTPStatus

from exceptions import EKGException, EKGExceptionCode
from fastapi import APIRouter
from loguru import logger
from models.ResponseModels import DownloadEKGResponse, ErrorDTO
from services import S3Service

router = APIRouter()

"""
| Endpoint                       | Description                          | Method |
|--------------------------------|--------------------------------------|--------|
| `/download`                    | Download a new EKG                   | GET    |
"""


@router.post(
    "/download",
    summary="Download an EKG",
    tags=["Download"],
    response_model=DownloadEKGResponse,
    responses={
        200: {"model": DownloadEKGResponse, "description": "OK"},
        400: {"model": ErrorDTO, "message": "Error: Bad request"},
    },
)
async def download_ekg(
    id: str, filename: str
):
    logger.info('here')
    if (
        not id
    ):
        raise EKGException(
            code=EKGExceptionCode.BAD_REQUEST,
            message="Invalid DownloadFileRequest",
        )
    
    s3_service = S3Service()
    bucket_name = 'ekgs'
    file_path = str(id + '/' + filename)
    logger.info(file_path)
    try:
        s3_service.download_file(bucket_name, filename, path=file_path)
    except EKGException as e:
        logger.error(e)
        raise
        
    return DownloadEKGResponse(
        status=HTTPStatus.OK.value,
        message=f"Image Downloaded Succesfully"
    )