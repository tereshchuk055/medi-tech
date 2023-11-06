from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model

UserModel = get_user_model()


def validate_required_field(value, field_name):
    if not value:
        raise ValidationError(f'Choose another {field_name}')


def custom_validation(data):
    email = data.get('email', '')
    # password = data.get('password', '')
    # username = data.get('username', '')
    # user_surname = data.get('user_surname', '')
    # user_birthdate = data.get('user_birthdate', '')
    # user_sex = data.get('user_sex', '')
    # user_phone = data.get('user_phone', '')

    validate_required_field(email, 'email')
    # validate_required_field(password, 'password')
    # validate_required_field(username, 'username')
    # validate_required_field(user_surname, 'user_surname')
    # validate_required_field(user_birthdate, 'user_birthdate')
    # validate_required_field(user_sex, 'user_sex')
    # validate_required_field(user_phone, 'user_phone')

    if UserModel.objects.filter(email=email).exists():
        raise ValidationError('Choose another email')
    return data
