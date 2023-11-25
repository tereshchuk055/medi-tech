from authentication.models import AppUser
from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .serializers import NewsSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.core.serializers import serialize
from .utils import *
from django.conf import settings
from django.shortcuts import get_object_or_404


class NewsView(APIView):
    permission_classes = [IsAuthenticated]

    def check_permission(self, user_data):
        is_admin = user_data['user_data_from_token']['is_admin']

        return is_admin

    def get_instance(self, user_id):
        return get_object_or_404(AppNews, pk=user_id)

    def post(self, request):
        try:
            user_data_from_token = decode_user(
                request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1])
        except ValidationError as e:
            raise serializers.ValidationError({'token': user_info})

        if self.check_permission(user_data, Permission.READ):
            serializer = NewsSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        instance = self.get_instance(user_id)
        
        serializer = NewsSerializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # def put(self, request):
    #     user_id = request.data.get('id')

    #     try:
    #         user_data_from_token = decode_user(
    #             request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1])
    #     except ValidationError as e:
    #         raise serializers.ValidationError({'token': user_info})

    #     if not user_id or not request.data:
    #         return Response({"error": "User ID and data are required"}, status=status.HTTP_400_BAD_REQUEST)

    #     user_data = {'user_id': user_id,
    #                  'user_data_from_token': user_data_from_token}

    #     if self.check_permission(user_data, Permission.EDIT):
    #         instance = self.get_instance(user_id)
    #     else:
    #         return Response({"error": "You havent permission"}, status=status.HTTP_404_NOT_FOUND)

    #     if not instance:
    #         return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    #     serializer = UserSerializer(
    #         data=request.data, instance=instance)
    #     if serializer.is_valid():
    #         user = serializer.save()
    #         return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def delete(self, request):
    #     user_id = request.data.get('id')

    #     try:
    #         user_data_from_token = decode_user(
    #             request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1])
    #     except ValidationError as e:
    #         raise serializers.ValidationError({'token': user_info})

    #     if not user_id or not request.data:
    #         return Response({"error": "User ID and data are required"}, status=status.HTTP_400_BAD_REQUEST)

    #     user_data = {'user_id': user_id,
    #                  'user_data_from_token': user_data_from_token}

    #     if self.check_permission(user_data, Permission.DELETE):
    #         instance = self.get_instance(user_id)
    #     else:
    #         return Response({"error": "You havent permission"}, status=status.HTTP_404_NOT_FOUND)

    #     if not instance:
    #         return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    #     instance.delete()
        return Response({"message": "User deleted successfully"}, status=status.HTTP_200_OK)

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.action == 'list':
            permission_classes = [AllowAny()]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]
