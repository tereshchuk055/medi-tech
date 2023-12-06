from django.db import models
from authentication.models import AppUser


class AppDoctorCard(models.Model):
    user_id = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    address = models.CharField('living_address', max_length=100)
    work_experience = models.IntegerField('Work Experience', blank=True)
    appointments = models.IntegerField('Number of appointments', default=0)
    degree = models.CharField('Medical degree', blank=True, max_length=50)
    position = models.CharField('Position', blank=True, max_length=50)
    about_me = models.TextField('About Me', blank=True)
    photo = models.FileField('image url', blank=True, null=True)

    class Meta:
        ordering = ['-work_experience']

    def __str__(self):
        return self.user_id
