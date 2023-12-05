from django.db import models
from authentication.models import AppUser


class AppDoctorCard(models.Model):
    user_id = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    address = models.CharField(('living_address'))
    work_experience = models.IntegerField(('Work Experience'), blank=True)
    appointments = models.IntegerField(('Number of appointments'), default=0)
    degree = models.CharField(('Medical degree'), blank=True)
    position = models.CharField(('Position'), blank=True)
    photo = models.FilePathField(('Path to photo'), blank=True)

    class Meta:
        ordering = ['-pub_date']

    def __str__(self):
        return self.title
