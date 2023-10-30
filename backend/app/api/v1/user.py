from http import HTTPStatus

from exceptions import EKGException, EKGExceptionCode
from fastapi import APIRouter
from loguru import logger
from models.RequestModels import RegisterUserRequest
from models.ResponseModels import ErrorDTO, RegisterUserResponse
from services import CognitoService, DynamoDBService

router = APIRouter()

"""
| Endpoint                       | Description                          | Method |
|--------------------------------|--------------------------------------|--------|
| `/user`                        | Register a new user                  | POST   |
| `/user/{user_id}`              | Retrieve a user's details            | GET    |
| `/user/{user_id}`              | Update a user's details (*)          | PATCH  |
| `/user/{user_id}`              | Delete a user's account              | DELETE |
"""


@router.post(
    "/user",
    summary="Register a new user",
    tags=["User"],
    response_model=RegisterUserResponse,
    responses={
        200: {"model": RegisterUserResponse, "description": "OK"},
        400: {"model": ErrorDTO, "message": "Error: Bad request"},
    },
)
async def register_user(
    register_request: RegisterUserRequest,
):
    if (
        not register_request.id
        or not register_request.email
        or not register_request.first_name
        or not register_request.last_name
        or not register_request.org_id
        or not register_request.password
    ):
        raise EKGException(
            code=EKGExceptionCode.BAD_REQUEST,
            message="Invalid RegisterUserRequest",
        )

    logger.info("register_request={}", register_request)

    dynamodb_service = DynamoDBService()
    cognito_service = CognitoService()

    try:
        # Add user to the cognito user pool
        cognito_service.create_user(
            user_id=register_request.id,
            user_email=register_request.email,
            first_name=register_request.first_name,
            last_name=register_request.last_name,
            organization_id=register_request.org_id,
            user_password=register_request.password,
        )
        # Add user to user table
        dynamodb_service.register_user(
            user_id=register_request.id,
            email=register_request.email,
            name=register_request.first_name + " " + register_request.last_name,
            organization_id=register_request.org_id,
        )
    except EKGException as e:
        logger.error(
            "register_request={}, error={}",
            register_request,
            e,
        )
        raise

    return RegisterUserResponse(status=HTTPStatus.OK.value)
