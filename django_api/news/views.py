from rest_framework.exceptions import ValidationError
from rest_framework import viewsets, permissions
from rest_framework.permissions import IsAuthenticated
from .serializers import NewsSerializer
from authentication.utils import decode_user
from .models import AppNews


class NewsViewSet(viewsets.ModelViewSet):
    queryset = AppNews.objects.all()
    serializer_class = NewsSerializer
    permission_classes = [IsAuthenticated]

    def get_permissions(self):

        if self.request.method in ['PUT', 'DELETE', 'POST']:
            return [IsAdminPermission()]
        elif self.request.method in ['retrieve', 'list']:
            return [permissions.AllowAny()]
        return super().get_permissions()


class IsAdminPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in ['PUT', 'DELETE', 'POST']:
            token = request.headers.get('Authorization', '').split(' ')
            if len(token) == 2 and token[0].lower() == 'bearer':
                try:
                    decoded_token = decode_user(token[1])
                    is_superuser = decoded_token.get('is_superuser', False)
                    return is_superuser
                except ExpiredSignatureError:
                    raise ValidationError({'token': 'Token has expired'})
                except InvalidTokenError:
                    raise ValidationError({'token': 'Invalid token'})
            return False
        return True
