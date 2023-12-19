from django.urls import path, include
from .views import AppDoctorAppointmentViewSet, MedicalConclusionsViewSet
from rest_framework.routers import DefaultRouter

app_name = 'medical_tools'

router = DefaultRouter()
router.register(r'doctor-appointments',
                AppDoctorAppointmentViewSet, basename='doctor-appointments')
router.register(r'medical-conclusions', MedicalConclusionsViewSet,
                basename='medical-conclusions')

urlpatterns = [
    path('', include(router.urls)),
]
