"""Set of constants."""
import os

from dotenv import load_dotenv

load_dotenv()

# Current Environment
EKG_ENV = os.environ["EKG_ENV"]

COGNITO_USER_POOL_ID = os.environ["COGNITO_USER_POOL_ID"]

AWS_ACCESS_KEY = os.environ["AWS_ACCESS_KEY"]
AWS_SECRET_ACCESS_KEY = os.environ["AWS_SECRET_ACCESS_KEY"]
REGION = "us-east-1"