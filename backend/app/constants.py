"""Set of constants."""
import os

from dotenv import load_dotenv

load_dotenv()

# Current Environment
EKG_ENV = os.environ["EKG_ENV"]

COGNITO_USER_POOL_ID = os.environ["COGNITO_USER_POOL_ID"]
