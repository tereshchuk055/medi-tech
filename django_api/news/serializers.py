from authentication.models import AppUser
from rest_framework import fields, serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth.password_validation import validate_password
from .models import AppNews
from django.contrib.auth import get_user_model, authenticate
from django.core.exceptions import ValidationError
from django.core.validators import MinLengthValidator
import datetime
import json


class NewsSerializer(serializers.ModelSerializer):

    class Meta:
        model = AppNews
        fields = ['title', 'content', 'pub_date']

    def update(self, instance, validated_data):
        for field, value in validated_data.items():
            setattr(instance, field, value)

        instance.save()
        return instance
