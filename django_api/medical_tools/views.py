from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .models import AppDoctorAppointment, MedicalConclusions
from .serializers import AppDoctorAppointmentSerializer, MedicalConclusionsSerializer
from .utils import decode_token


class AppDoctorAppointmentViewSet(viewsets.ModelViewSet):
    serializer_class = AppDoctorAppointmentSerializer
    queryset = AppDoctorAppointment.objects.all()

    def get_permissions(self):
        is_superuser = isSuperuser().has_permission(self.request, self)

        if is_superuser:
            return [permissions.AllowAny()]

        if self.request.method in ['GET', 'PUT']:
            return [permissions.IsAuthenticated(), IsOwner()]
        elif self.request.method in ['POST']:
            return [permissions.IsAuthenticated()]

        return [permissions.IsAdminUser()]

    def perform_create(self, serializer):
        token = self.request.headers.get('Authorization')
        decode_data = decode_token(token)

        is_stuff = IsStuff().has_permission(self.request, self)
        is_superuser = isSuperuser().has_permission(self.request, self)

        if is_superuser:
            serializer.save()
        elif is_stuff and not is_superuser:
            serializer.save(doctor_id=get_doctor_id_from_user_id(
                decode_data.get('user_id')))
        elif not is_stuff and not is_superuser:
            serializer.save(patient_id=get_patient_id_from_user_id(
                decode_data.get('user_id')))


class MedicalConclusionsViewSet(viewsets.ModelViewSet):
    serializer_class = MedicalConclusionsSerializer
    queryset = MedicalConclusions.objects.all()

    def get_permissions(self):
        if self.request.method in ['GET']:
            return [permissions.IsAuthenticated(), IsOwnerForConclusion()]

        is_stuff = IsStuff().has_permission(self.request, self)
        is_superuser = isSuperuser().has_permission(self.request, self)

        if is_superuser:
            return [permissions.AllowAny()]

        elif is_stuff and self.request.method in ['GET', 'POST']:
            return [permissions.AllowAny()]

        elif is_stuff and self.request.method in ['PUT']:
            return [permissions.IsAuthenticated(), IsOwnerForConclusion()]

        return [permissions.IsAdminUser()]


class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        token = request.headers.get('Authorization')
        decode_data = decode_token(token)
        user_id = decoded_token.get('user_id')
        return user_id == obj.patient_id.user_id or user_id == obj.doctor_id.user_id


class IsOwnerForConclusion(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        token = request.headers.get('Authorization')
        decode_data = decode_token(token)
        user_id = decoded_token.get('user_id')
        return user_id == obj.appointment_id.patient_id.user_id or user_id == obj.appointment_id.doctor_id.user_id


class isSuperuser():
    def has_permission(self, request, view, obj):
        token = request.headers.get('Authorization')
        decode_data = decode_token(token)
        return decoded_token.get('is_superuser', False)


class IsStuff(permissions.BasePermission):
    def has_permission(self, request, view, obj):
        token = request.headers.get('Authorization')
        decode_data = decode_token(token)
        return decoded_token.get('is_stuff', False)


def get_doctor_id_from_user_id(user_id):
    try:
        doctor_card = AppDoctorCard.objects.get(user_id=user_id)
        return doctor_card.id
    except AppDoctorCard.DoesNotExist:
        return None


def get_patient_id_from_user_id(user_id):
    try:
        patient_card = AppPatientCard.objects.get(user_id=user_id)
        return patient_card.id
    except AppDoctorCard.DoesNotExist:
        return None
