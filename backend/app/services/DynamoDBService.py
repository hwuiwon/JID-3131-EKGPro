import boto3
from botocore.exceptions import ClientError
from exceptions import EKGDBException, EKGDBExceptionCode
from loguru import logger


class DynamoDBService:
    """
    Handles all of the operations related to DynamoDB.
    https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html
    """

    def __init__(self):
        self.client = boto3.client("dynamodb")
        self.resource = boto3.resource("dynamodb")

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
