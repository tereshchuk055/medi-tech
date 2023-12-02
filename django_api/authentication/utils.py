import jwt
from django.conf import settings
from enum import Enum
from rest_framework.exceptions import ValidationError


class Permission(Enum):
    READ = 0b0001
    ADD = 0b0010
    EDIT = 0b0100
    DELETE = 0b1000


def decode_user(token):
    try:
        decoded_data = jwt.decode(
            token, key=settings.SECRET_KEY, algorithms=["HS256"])
        return decoded_data
    except jwt.ExpiredSignatureError:
        raise ValidationError({'token': 'Token has expired'})
    except jwt.InvalidTokenError:
        raise ValidationError({'token': 'Invalid token'})
