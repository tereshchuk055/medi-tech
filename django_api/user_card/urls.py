from django.urls import path
from .views import AppDoctorCardListView, AppDoctorCardDetailView

app_name = 'user_card'

urlpatterns = [
    path('doctor/', AppDoctorCardListView.as_view(),
         name='doctor-card-list'),
    path('doctor/<int:pk>/', AppDoctorCardDetailView.as_view(),
         name='doctor-card-detail'),
]
