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
        ordering = ['-id']

    def __str__(self):
        return self.user_id


class AppPatientCard(models.Model):
    user_id = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    photo = models.FileField('image url', blank=True, null=True)
    height = models.FloatField('Height', blank=True)
    weight = models.FloatField('weight', blank=True)
    chronic_conditions = models.TextField('chronic_conditions')
    allergies = models.TextField('allergies', blank=True)
    address = models.CharField('address', max_length=255, blank=True)
    workplace = models.CharField('workplace', max_length=255, blank=True)
    vaccinations = models.TextField('vaccinations', blank=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.user_id
