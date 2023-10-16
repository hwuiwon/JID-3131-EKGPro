import boto3
from botocore.exceptions import ClientError
from botocore.config import Config
from exceptions import EKGDBException, EKGDBExceptionCode
from loguru import logger

from constants.constants import AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY, REGION

class DynamoDBService:
    """
    Handles all of the operations related to DynamoDB.
    https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html
    """

    def __init__(self):
        self.client = boto3.client("dynamodb",
            region_name=REGION,
            aws_access_key_id=AWS_ACCESS_KEY,
            aws_secret_access_key=AWS_SECRET_ACCESS_KEY)
        self.resource = boto3.resource("dynamodb",
            region_name=REGION,
            aws_access_key_id=AWS_ACCESS_KEY,
            aws_secret_access_key=AWS_SECRET_ACCESS_KEY)

    def put_item(self, table_name: str, item: dict) -> None:
        try:
            self.client.put_item(
                Item=item,
                TableName=table_name,
            )
        except ClientError as e:
            logger.error("table_name={}, item={}, error={}", table_name, item, str(e))
            raise EKGDBException(
                code=EKGDBExceptionCode.ITEM_PUT_ERROR,
                message="Could not append item to table",
            )

    def get_item(self, table_name: str, key: dict) -> dict:
        response = self.client.get_item(
            Key=key,
            TableName=table_name,
        )

        if "Item" not in response:
            raise EKGDBException(
                code=EKGDBExceptionCode.ITEM_DOES_NOT_EXIST,
                message="Item does not exist",
            )

        return response

    def delete_item(self, table_name: str, key: dict) -> dict:
        response = self.client.delete_item(
            TableName=table_name, Key=key, ReturnValues="ALL_OLD"
        )

        if "Attributes" not in response:
            raise EKGDBException(
                code=EKGDBExceptionCode.ITEM_DOES_NOT_EXIST,
                message="Item does not exist",
            )

        return response

    def register_user(
        self,
        user_id=str,
        email=str,
        name=str,
        organization_id=str,
    ) -> None:
        table_name = 'users'
        self.put_item(table_name=table_name, item={'id': {'S': user_id}, 'email': {'S': email}, 'name': {'S': name}, 'organization_id': {'S': organization_id}})