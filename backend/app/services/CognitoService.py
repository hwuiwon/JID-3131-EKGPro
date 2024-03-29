# import secrets

import boto3
from constants.constants import (
    AWS_ACCESS_KEY,
    AWS_SECRET_ACCESS_KEY,
    COGNITO_USER_POOL_ID,
    REGION,
)
from exceptions import EKGIdentityException, EKGIdentityExceptionCode
from loguru import logger

from .DynamoDBService import DynamoDBService


class CognitoService:
    """https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/cognito-idp.html"""

    def __init__(self):
        self.client = boto3.client(
            "cognito-idp",
            aws_access_key_id=AWS_ACCESS_KEY,
            aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
            region_name=REGION,
        )

    def create_user(
        self,
        user_id: str,
        user_email: str,
        first_name: str,
        last_name: str,
        organization_id: str,
        user_password: str,
    ) -> None:
        # random_password = secrets.token_urlsafe(15) + "!2"
        logger.info(
            "user_id={}, user_email={}, name={}, organization_id={}, random_password={}",
            user_id,
            user_email,
            first_name + " " + last_name,
            organization_id,
            user_password,
        )

        try:
            self.client.admin_create_user(
                UserPoolId=COGNITO_USER_POOL_ID,
                Username=user_email,
                UserAttributes=[
                    {"Name": "email", "Value": user_email},
                    {"Name": "given_name", "Value": first_name},
                    {"Name": "family_name", "Value": last_name},
                    # {"Name": "custom:organization_id", "Value": organization_id},
                    # {"Name": "custom:user_id", "Value": user_id},
                ],
                TemporaryPassword=user_password,
                MessageAction="SUPPRESS",
                DesiredDeliveryMediums=["EMAIL"],
            )
        except Exception as e:
            logger.error(
                "user_id={}, user_email={}, name={}, organization_id={} error={}",
                user_id,
                user_email,
                first_name + " " + last_name,
                organization_id,
                str(e),
            )
            raise EKGIdentityException(
                code=EKGIdentityExceptionCode.FAIL_CREATE_USER,
                message="Failed to create user",
            )

    def remove_user(self, user_id: str) -> None:
        logger.info("user_id={}", user_id)

        dynamodb_service = DynamoDBService()

        try:
            user = dynamodb_service.get_user(user_id=user_id)
            self.client.admin_delete_user(
                UserPoolId=COGNITO_USER_POOL_ID, Username=user.email
            )
        except Exception as e:
            logger.error("user_id={}, error={}", user_id, str(e))
            raise EKGIdentityException(
                code=EKGIdentityExceptionCode.FAIL_DELETE_USER,
                message="Failed to delete user",
            )
