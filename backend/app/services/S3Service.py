import io

import boto3
from fastapi import UploadFile

from constants.constants import AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY, REGION

class S3Service:
    """
    Handles all of the operations related to S3.
    https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html

    Author: Hwuiwon Kim (hwuiwon.kim@gmail.com)
    """

    def __init__(self):
        self.client = boto3.client("s3",
            region_name=REGION,
            aws_access_key_id=AWS_ACCESS_KEY,
            aws_secret_access_key=AWS_SECRET_ACCESS_KEY)
        self.resource = boto3.resource("s3",
            region_name=REGION,
            aws_access_key_id=AWS_ACCESS_KEY,
            aws_secret_access_key=AWS_SECRET_ACCESS_KEY)

    def check_if_directory_exists(self, bucket_name: str, directory: str) -> bool:
        objects = list(
            self.resource.Bucket(bucket_name).objects.filter(Prefix=directory)
        )

        return len(objects) > 0

    def upload_file_in_bytes(
        self, bucket_name: str, user: str, filename: str, bytes: bytes
    ) -> None:
        directory_exists = self.check_if_directory_exists(bucket_name, user)

        if not directory_exists:
            # directory for user does not exist, so we need to create it
            self.client.put_object(Bucket=bucket_name, Body="", Key=f"{user}/")

        self.client.upload_fileobj(io.BytesIO(bytes), bucket_name, f"{user}/{filename}")

    def upload_file(self, bucket_name: str, file: UploadFile, path=None) -> None:
        if path is None:
            path = file.filename

        self.client.upload_fileobj(file.file, bucket_name, path)

    def download_file_in_bytes(
        self, bucket_name: str, user: str, filename: str
    ) -> bytes | None:
        directory_exists = self.check_if_directory_exists(bucket_name, user)

        if not directory_exists:
            return

        with open(filename, "wb") as data:
            self.client.download_fileobj(bucket_name, f"{user}/{filename}", data)
            return data

    def delete_file(self, user: str, bucket_name: str, filename: str) -> None:
        self.client.delete_object(
            Bucket=bucket_name,
            Key=f"{user}/{filename}",
        )
