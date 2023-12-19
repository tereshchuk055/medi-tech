from rest_framework import serializers
from user_card.serializers import AppPatientCardSerializer, AppDoctorCardSerializer
from .serializers import AppPatientCardSerializer, AppDoctorCardSerializer
import cloudinary.uploader
from .models import AppDoctorAppointment, MedicalConclusions
from authentication.serializers import UserSerializer


class AppDoctorAppointmentSerializer(serializers.ModelSerializer):
    patient = AppPatientCardSerializer(source='patient_id', read_only=True)
    doctor = AppDoctorCardSerializer(source='doctor_id', read_only=True)

    class Meta:
        model = AppDoctorAppointment
        fields = '__all__'
        extra_kwargs = {
            'doctor_id': {'required': False},
            'patient_id': {'required': False}}
        # read_only_fields = ('work_experience',)


class MedicalConclusionsSerializer(serializers.ModelSerializer):
    appointment = AppDoctorAppointmentSerializer(
        source='appointment_id', read_only=True)

    class Meta:
        model = MedicalConclusions
        fields = '__all__'
        extra_kwargs = {
            'appointment_id': {'required': False}
        }
