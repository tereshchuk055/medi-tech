
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('authentication.urls', namespace='authentication')),
    path('news/', include('news.urls', namespace='news')),
    path('card/', include('user_card.urls', namespace='user_card'))
]
