from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import make_password
from django.core.validators import MinLengthValidator
from .validations import custom_validation

UserModel = get_user_model()




# class UserLoginSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     password = serializers.CharField()

#     def save(self):
#         email = self.validated_data['email']
#         password = self.validated_data['password']

#         user = authenticate(username=email, password=password)

#         if not user:
#             raise AuthenticationFailed(
#                 'User not found or invalid credentials.')

#         return user


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserModel
#         fields = ('email', 'username', 'user_surname',
#                   'user_birthdate', 'user_sex', 'user_phone')
