from django.db import models
from django.utils.translation import gettext as _


class AppointmentState(models.TextChoices):
    NEW = 'new', _('New')
    PROCESSED = 'processed', _('Processed')
    END = 'end', _('End')


def decode_token(token):
    try:
        decoded_data = jwt.decode(
            token, key=settings.SECRET_KEY, algorithms=["HS256"])
        return decoded_data
    except jwt.ExpiredSignatureError:
        raise ValidationError({'token': 'Token has expired'})
    except jwt.InvalidTokenError:
        raise ValidationError({'token': 'Invalid token'})
