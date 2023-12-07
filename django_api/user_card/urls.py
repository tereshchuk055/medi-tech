from django.urls import path, include
from .views import AppDoctorCardListView, AppDoctorCardDetailView
from rest_framework.routers import DefaultRouter
from .views import MedicalRecordViewSet

app_name = 'user_card'

router = DefaultRouter()
router.register(r'patient', MedicalRecordViewSet,
                basename='patient')

urlpatterns = [
    path('doctor/', AppDoctorCardListView.as_view(),
         name='doctor-card-list'),
    path('doctor/<int:pk>/', AppDoctorCardDetailView.as_view(),
         name='doctor-card-detail'),
    path('', include(router.urls)),
]
