# from authentication.models import AppUser
# from rest_framework import fields, serializers
# from django.contrib.auth.hashers import make_password
# from django.contrib.auth.password_validation import validate_password
# from .validations import custom_validation
# from django.contrib.auth import get_user_model, authenticate
# from django.core.exceptions import ValidationError
# from django.core.validators import MinLengthValidator
# import datetime
# import json
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# from rest_framework_simplejwt.tokens import RefreshToken

# UserModel = get_user_model()


# class UserRegisterSerializer(serializers.ModelSerializer):
#     email = serializers.EmailField()
#     password = serializers.CharField(write_only=True, validators=[
#                                      MinLengthValidator(limit_value=8)])

#     class Meta:
#         model = UserModel
#         fields = ['email', 'first_name', 'last_name',
#                   'user_birthdate', 'user_sex', 'user_phone',
#                   'password', 'date_joined', 'is_active']

#     def validate_email(self, value):
#         custom_validation({'email': value})
#         return value

#     def create(self, validated_data):
#         user = UserModel.objects._create_user(**validated_data)
#         return user


# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)
#         dt_now = datetime.datetime.now()
#         dt_now_str = dt_now.strftime("%Y-%m-%d %H:%M:%S")
#         token['create_time'] = dt_now_str
#         token['user_email'] = user.email
#         token['first_name'] = user.first_name
#         token['last_name'] = user.last_name
#         dt_bth_str = user.user_birthdate.strftime("%Y-%m-%d")
#         token['user_birthdate'] = dt_bth_str
#         token['user_sex'] = user.user_sex
#         token['user_phone'] = user.user_phone
#         dt_joined_str = user.date_joined.strftime("%Y-%m-%d %H:%M:%S")
#         token['date_joined'] = dt_joined_str
#         refresh = RefreshToken.for_user(user)
#         refresh_token = str(refresh)
#         return token

#     def validate(self, attrs):
#         data = super().validate(attrs)
#         refresh = self.get_token(self.user)
        
#         data.pop('refresh', None)
#         data["access"] = str(refresh.access_token)

#         self.user.refresh_token = refresh
#         self.user.save()
        
#         return data
        
