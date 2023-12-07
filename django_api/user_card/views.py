from rest_framework import generics, permissions, viewsets
from .models import AppDoctorCard, AppPatientCard
from .serializers import AppDoctorCardSerializer, AppPatientCardSerializer
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
        user_id = check_user_permissions(self)
        if not AppDoctorCard.objects.filter(user_id=user_id).exists():
            serializer.save(user_id=user_id)
        else:
            raise PermissionDenied(
                detail="The card has already exist")


class AppDoctorCardDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AppDoctorCardSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        # user_id = check_user_permissions(self, allowAny=True)
        obj_id = self.kwargs.get('pk')
        return get_object_or_404(AppDoctorCard, id=obj_id)

    def perform_update(self, serializer):
        user_id = check_user_permissions(self)
        if AppDoctorCard.objects.filter(user_id=user_id).exists():
            serializer.save(user_id=user_id)
        else:
            raise PermissionDenied(
                detail="You do not have permission to edit this doctor card.")

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        is_admin = check_user_permissions(self, True)
        if is_admin:
            self.perform_destroy(instance)
            return Response({"detail": "Doctor card deleted successfully."},
                            status=status.HTTP_204_NO_CONTENT)
        else:
            raise PermissionDenied(
                detail="You do not have permission to delete this doctor card")


def check_user_permissions(self, admin=False, allowAny=False):
    token = self.request.headers.get('Authorization', '').split(' ')
    if len(token) == 2 and token[0].lower() == 'bearer':
        try:
            decoded_token = decode_user(token[1])
            is_stuff = decoded_token.get('is_stuff', False)
        except ExpiredSignatureError:
            raise ValidationError({'token': 'Token has expired'})
        except InvalidTokenError:
            raise ValidationError({'token': 'Invalid token'})
    if allowAny:
        user_id = decoded_token.get('user_id')
        is_stuff = decoded_token.get('is_stuff', False)
        return user_id, is_stuff
    elif not is_stuff:
        raise PermissionDenied(
            detail="You do1 not have permission for this operation.")
    elif not admin:
        user_id = decoded_token.get('user_id')
        return user_id
    else:
        is_superuser = decoded_token.get('is_superuser', False)
        return is_superuser


class MedicalRecordViewSet(viewsets.ModelViewSet):
    serializer_class = AppPatientCardSerializer
    queryset = AppPatientCard.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_stuff:
            return AppPatientCard.objects.all()
        else:
            return AppPatientCard.objects.filter(user_id=self.request.user)

    def create(self, request, *args, **kwargs):
        user_id_from_token, is_stuff = check_user_permissions(
            self, allowAny=True)
        if not is_stuff and user_id_from_token == int(request.data.get('user_id')):
            existing_record = AppPatientCard.objects.filter(
                user_id=user_id_from_token)
            if existing_record.exists():
                return Response({'error': 'You can create only one medical record.'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return super().create(request, *args, **kwargs)

        elif is_stuff and not user_id_from_token == int(request.data.get('user_id')):
            existing_record = AppPatientCard.objects.filter(
                user_id=int(request.data.get('user_id')))
            if existing_record.exists():
                return Response({'error': 'You can create only one medical record.'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return super().create(request, *args, **kwargs)
        else:
            return Response({'error': "You don`t have permisision"}, status=status.HTTP_400_BAD_REQUEST)


class IsStaffOrOwnerPermission(permissions.BasePermission):
    """
    Дозволяє доступ тільки співробітникам або власникам медичних карток.
    """

    def has_object_permission(self, request, view, obj):
        token = request.headers.get('Authorization', '').split(' ')
        if len(token) == 2 and token[0].lower() == 'bearer':
            try:
                decoded_token = decode_user(token[1])
                is_stuff = decoded_token.get('is_stuff', False)
            except ExpiredSignatureError:
                raise ValidationError({'token': 'Token has expired'})
            except InvalidTokenError:
                raise ValidationError({'token': 'Invalid token'})
        else:
            raise ValidationError({'token': 'Invalid token format'})

        if is_stuff:
            return True

        return obj.user == decoded_token.get('user_id')
