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


class UserView(APIView):
    permission_classes = []

    def get_instance(self, user_id):
        try:
            return AppUser.objects.get(pk=user_id)
        except AppUser.DoesNotExist:
            return None


    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def get(self, request):
        user_id = request.data.get('id')
        # user_token = request.data.get('token')

        if not user_id:
            return Response({"error": "User ID is required"}, status=status.HTTP_400_BAD_REQUEST)

        instance = self.get_instance(user_id)

        if not instance:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def put(self, request):
        user_id = request.data.get('id')

        if not user_id or not request.data:
            return Response({"error": "User ID and data are required"}, status=status.HTTP_400_BAD_REQUEST)

        instance = self.get_instance(user_id)

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

        if not user_id:
            return Response({"error": "User ID is required"}, status=status.HTTP_400_BAD_REQUEST)

        instance = self.get_instance(user_id)

        if not instance:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        instance.delete()
        return Response({"message": "User deleted successfully"}, status=status.HTTP_200_OK)


class MyTokenObtainPairView(TokenObtainPairView, APIView):
    serializer_class = MyTokenObtainPairSerializer
