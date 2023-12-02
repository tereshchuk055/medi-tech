from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models
from django.contrib.auth.models import PermissionsMixin


class AppUserManager(BaseUserManager):
    def _create_user(self, email, password, **extra_fields):
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_user(self, email, password, **extra_fields):
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('permissions_level', 15)
        return self._create_user(email, password, **extra_fields)


class AppUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(_('first name'), max_length=30)
    last_name = models.CharField(_('last name'), max_length=30)
    user_birthdate = models.DateField(_('user_birthdate'))
    user_sex = models.CharField(max_length=10, choices=[(
        'male', 'Male'), ('female', 'Female')])
    user_phone = models.CharField(max_length=50)
    date_joined = models.DateTimeField(_('date joined'), auto_now_add=True)
    last_login = models.DateTimeField(null=True, blank=True)
    is_active = models.BooleanField(_('active'), default=True)
    permissions_level = models.IntegerField(_('permissions'), default=0)
    is_superuser = models.BooleanField(_('superuser'), default=False)
    refresh_token = models.TextField(
        _('refresh token'), default="", null=False)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_birthdate']

    objects = AppUserManager()

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

    def __str__(self):
        return self.email
