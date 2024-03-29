from http import HTTPStatus

from exceptions import EKGException, EKGExceptionCode
from fastapi import APIRouter, File, UploadFile
from loguru import logger
from models.RequestModels import UploadFileRequest
from models.ResponseModels import ErrorDTO, UploadEKGResponse
from services import S3Service

router = APIRouter()

"""
| Endpoint                       | Description                          | Method |
|--------------------------------|--------------------------------------|--------|
| `/upload`                      | Upload a new EKG                     | POST   |
"""


@router.post(
    "/upload",
    summary="Upload an EKG",
    tags=["Upload"],
    response_model=UploadEKGResponse,
    responses={
        200: {"model": UploadEKGResponse, "description": "OK"},
        400: {"model": ErrorDTO, "message": "Error: Bad request"},
    },
)
async def upload_ekg(
    file: UploadFile, id: str
):
    logger.info('here')
    if (
        not id
        or not file
    ):
        raise EKGException(
            code=EKGExceptionCode.BAD_REQUEST,
            message="Invalid UploadFileRequest",
        )
    # Verify that the file is an image (you can add more validations here) 
    if not file.content_type.startswith("image/"):
        # fix custom error for not uploading image
        raise EKGException(
            code=EKGExceptionCode.BAD_REQUEST.value,
            message="Only images are allowed",
        )
    logger.info(file.filename)
    
    s3_service = S3Service()
    bucket_name = 'ekgs'
    file_path = str(id + '/' + file.filename)
    logger.info(file_path)
    try:
        s3_service.upload_file(bucket_name, file, path=file_path)
    except EKGException as e:
        logger.error(e)
        raise
        
    return UploadEKGResponse(
        status=HTTPStatus.OK.value,
        message=f"Image Uploaded Succesfully"
    )