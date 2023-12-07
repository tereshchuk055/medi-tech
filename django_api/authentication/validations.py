from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model

UserModel = get_user_model()


def validate_required_field(value, field_name):
    if not value:
        raise ValidationError(f'Choose another {field_name}')


def custom_validation(data):
    email = data.get('email', '')

    validate_required_field(email, 'email')

    user_id = data.get('exclude_user_id')

    if user_id:
        if UserModel.objects.filter(email=email).exclude(id=user_id).exists():
            raise ValidationError('Choose another email')
    else:
        if UserModel.objects.filter(email=email).exists():
            raise ValidationError('Choose another email')
    return data
