"""General utils functions."""
from boto3.dynamodb.types import TypeDeserializer, TypeSerializer


def serialize(object: dict) -> dict:
    serializer = TypeSerializer()
    return {k: serializer.serialize(v) for k, v in object.items()}


def deserialize(object: dict) -> dict:
    deserializer = TypeDeserializer()
    return {k: deserializer.deserialize(v) for k, v in object.items()}
