from rest_framework import generics, permissions
from .models import AppDoctorCard
from .serializers import AppDoctorCardSerializer
from jwt.exceptions import ExpiredSignatureError, InvalidTokenError
from rest_framework.exceptions import ValidationError, PermissionDenied
from authentication.utils import decode_user
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status


class AppDoctorCardListView(generics.ListCreateAPIView):
    serializer_class = AppDoctorCardSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = AppDoctorCard.objects.all()

    def perform_create(self, serializer):
        user_id = check_doctor_permissions(self)
        if not AppDoctorCard.objects.filter(user_id=user_id).exists():
            serializer.save(user_id=user_id)
        else:
            raise PermissionDenied(
                detail="The card has already exist")


class AppDoctorCardDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AppDoctorCardSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        # user_id = check_doctor_permissions(self, allowAny=True)
        obj_id = self.kwargs.get('pk')
        return get_object_or_404(AppDoctorCard, id=obj_id)

    def perform_update(self, serializer):
        user_id = check_doctor_permissions(self)
        if AppDoctorCard.objects.filter(user_id=user_id).exists():
            serializer.save(user_id=user_id)
        else:
            raise PermissionDenied(
                detail="You do not have permission to edit this doctor card.")

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        is_admin = check_doctor_permissions(self, True)
        if is_admin:
            self.perform_destroy(instance)
            return Response({"detail": "Doctor card deleted successfully."},
                            status=status.HTTP_204_NO_CONTENT)
        else:
            raise PermissionDenied(
                detail="You do not have permission to delete this doctor card")


def check_doctor_permissions(self, admin=False, allowAny=False):
    token = self.request.headers.get('Authorization', '').split(' ')
    if len(token) == 2 and token[0].lower() == 'bearer':
        try:
            decoded_token = decode_user(token[1])
            is_stuff = decoded_token.get('is_stuff', False)
        except ExpiredSignatureError:
            raise ValidationError({'token': 'Token has expired'})
        except InvalidTokenError:
            raise ValidationError({'token': 'Invalid token'})
    if not is_stuff:
        raise PermissionDenied(
            detail="You do1 not have permission for this operation.")
    elif not admin:
        user_id = decoded_token.get('user_id')
        return user_id
    else:
        is_superuser = decoded_token.get('is_superuser', False)
        return is_superuser
