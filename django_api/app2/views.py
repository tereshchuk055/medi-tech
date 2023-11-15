# from authentication.models import AppUser
# from rest_framework.exceptions import ValidationError
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework.permissions import IsAuthenticated
# from .serializers import UserRegisterSerializer, MyTokenObtainPairSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView



# class UserRegisterView(APIView):
#     permission_classes = []

#     def post(self, request):
#         serializer = UserRegisterSerializer(data=request.data)

#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             data = serializer.data
#             return Response(data, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class MyTokenObtainPairView(TokenObtainPairView, APIView):
#     serializer_class = MyTokenObtainPairSerializer


