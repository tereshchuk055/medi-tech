from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from .validations import custom_validation
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
import datetime
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

UserModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserModel
        fields = ['email', 'first_name', 'last_name', 'user_birthdate',
                  'user_sex', 'user_phone', 'password', 'date_joined',
                  'is_active', 'is_stuff']
        extra_kwargs = {
            'password': {'write_only': True},
            'is_active': {'write_only': True},
            'is_stuff': {'write_only': True},
        }

    def validate_email(self, value):
        exclude_user_id = getattr(self.instance, 'id', None)
        custom_validation({'email': value, 'exclude_user_id': exclude_user_id})
        return value

    def validate_password(self, value):
        try:
            validate_password(value, self.initial_data)
        except ValidationError as e:
            raise serializers.ValidationError({'password': e.messages})
        return value

    def create(self, validated_data):
        if not validated_data.pop('is_stuff', False):
            user = UserModel.objects.create_user(**validated_data)
        else:
            user = UserModel.objects.create_stuff(**validated_data)
        return user

    def update(self, instance, validated_data):
        for field, value in validated_data.items():
            setattr(instance, field, value)

        password = validated_data.get('password')
        if password:
            self.validate_password(password)
            instance.set_password(password)

        instance.save()
        return instance


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        dt_now = datetime.datetime.now()
        dt_now_str = dt_now.strftime("%Y-%m-%d %H:%M:%S")
        token['create_time'] = dt_now_str
        token['user_email'] = user.email
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        dt_bth_str = user.user_birthdate.strftime("%Y-%m-%d")
        token['user_birthdate'] = dt_bth_str
        token['user_sex'] = user.user_sex
        token['user_phone'] = user.user_phone
        dt_joined_str = user.date_joined.strftime("%Y-%m-%d %H:%M:%S")
        token['date_joined'] = dt_joined_str
        token['permissions_level'] = user.permissions_level
        token['is_superuser'] = user.is_superuser
        token['is_stuff'] = user.is_stuff
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)

        data.pop('refresh', None)
        data["access"] = str(refresh.access_token)

        self.user.refresh_token = refresh
        self.user.save()

        return data
