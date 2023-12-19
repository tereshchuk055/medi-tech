from django.db import models
from user_card.models import AppDoctorCard, AppPatientCard
from .utils import AppointmentState


class AppDoctorAppointment(models.Model):
    doctor_id = models.ForeignKey(AppDoctorCard, on_delete=models.CASCADE)
    patient_id = models.ForeignKey(AppPatientCard, on_delete=models.CASCADE)
    creation_date = models.DateTimeField('creation date', auto_now_add=True)
    appointment_date = models.DateTimeField('appointment date')
    state = models.CharField(
        max_length=20,
        choices=AppointmentState.choices,
        default=AppointmentState.NEW,
    )
    comment = models.TextField('Comment')

    class Meta:
        ordering = ['-id']
        db_table =('doctor_appointment')

    def __str__(self):
        return str(self.id)


class MedicalConclusions(models.Model):
    appointment_id = models.ForeignKey(
        AppDoctorAppointment, on_delete=models.CASCADE)
    complaint = models.TextField(blank=True)
    problem = models.TextField(blank=True)
    disease = models.CharField(max_length=255, blank=True)

    blood_pressure = models.CharField(max_length=20, blank=True)
    pulse = models.IntegerField(blank=True, null=True)
    symptoms = models.TextField(blank=True)

    recommendations = models.TextField(blank=True)

    conclusions = models.TextField(blank=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return str(self.id)
