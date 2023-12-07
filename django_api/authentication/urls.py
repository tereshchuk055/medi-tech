from django.urls import path, include
from . views import UserView
from rest_framework_simplejwt.views import TokenObtainPairView, \
    TokenRefreshView, TokenVerifyView

app_name = 'authentication'

user_patterns = [
    path("", UserView.as_view()),
    path("update/", UserView.as_view()),
    path("delete/", UserView.as_view()),
]

urlpatterns = [
    path('signup/', UserView.as_view(), name='signup'),
    path('user/', include(user_patterns), name='userInfo'),

    # JWT
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
