from authentication.models import AppUser
from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer, MyTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.core.serializers import serialize
import json
import jwt
from django.conf import settings
from django.shortcuts import get_object_or_404
from enum import Enum


class Permission(Enum):
    READ = 0b0001
    ADD = 0b0010
    EDIT = 0b0100
    DELETE = 0b1000


class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def decode_user(self, token):
        decoded_data = jwt.decode(jwt=token,
                                  key=settings.SECRET_KEY,
                                  algorithms=["HS256"])
        return decoded_data

    def get_access_level(self, permission_level, permission_type):
        return (permission_level & permission_type.value) > 0

    def check_permission(self, user_data, permission_type):
        user_id = user_data['user_id']
        user_id_from_token = user_data['user_data_from_token']['user_id']
        permission_level = user_data['user_data_from_token']['permissions_level']

        permissions_level = self.get_access_level(
            permission_level, permission_type)

        if user_id == user_id_from_token or permissions_level:
            return True
        else:
            return False

    def get_instance(self, user_id):
        return get_object_or_404(AppUser, pk=user_id)

    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        user_id = request.data.get('id')

        try:
            user_data_from_token = self.decode_user(
                request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1])
        except ValidationError as e:
            raise serializers.ValidationError({'token': user_info})

        if not user_id:
            return Response({"error": "User ID is required"}, status=status.HTTP_400_BAD_REQUEST)

        user_data = {'user_id': user_id,
                     'user_data_from_token': user_data_from_token}

        if self.check_permission(user_data, Permission.READ):
            instance = self.get_instance(user_id)
        else:
            return Response({"error": "You havent permission"}, status=status.HTTP_404_NOT_FOUND)

        if not instance:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request):
        user_id = request.data.get('id')

        try:
            user_data_from_token = self.decode_user(
                request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1])
        except ValidationError as e:
            raise serializers.ValidationError({'token': user_info})

        if not user_id or not request.data:
            return Response({"error": "User ID and data are required"}, status=status.HTTP_400_BAD_REQUEST)

        user_data = {'user_id': user_id,
                     'user_data_from_token': user_data_from_token}

        if self.check_permission(user_data, Permission.EDIT):
            instance = self.get_instance(user_id)
        else:
            return Response({"error": "You havent permission"}, status=status.HTTP_404_NOT_FOUND)

        if not instance:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(
            data=request.data, instance=instance)
        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        user_id = request.data.get('id')

        try:
            user_data_from_token = self.decode_user(
                request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1])
        except ValidationError as e:
            raise serializers.ValidationError({'token': user_info})

        if not user_id or not request.data:
            return Response({"error": "User ID and data are required"}, status=status.HTTP_400_BAD_REQUEST)

        user_data = {'user_id': user_id,
                     'user_data_from_token': user_data_from_token}

        if self.check_permission(user_data, Permission.DELETE):
            instance = self.get_instance(user_id)
        else:
            return Response({"error": "You havent permission"}, status=status.HTTP_404_NOT_FOUND)

        if not instance:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        instance.delete()
        return Response({"message": "User deleted successfully"}, status=status.HTTP_200_OK)

    def get_permissions(self):
        if self.request.method == 'post':
            return [AllowAny()]
        return super().get_permissions()


class MyTokenObtainPairView(TokenObtainPairView, APIView):
    serializer_class = MyTokenObtainPairSerializer
