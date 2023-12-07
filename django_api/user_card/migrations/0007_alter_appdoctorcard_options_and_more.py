# Generated by Django 4.2.6 on 2023-12-06 22:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("user_card", "0006_appdoctorcard_about_me"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="appdoctorcard",
            options={"ordering": ["-id"]},
        ),
        migrations.RenameField(
            model_name="appdoctorcard",
            old_name="user_id",
            new_name="user",
        ),
        migrations.CreateModel(
            name="AppPatientCard",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "photo",
                    models.FileField(
                        blank=True, null=True, upload_to="", verbose_name="image url"
                    ),
                ),
                ("height", models.FloatField(blank=True, verbose_name="Height")),
                ("weight", models.FloatField(blank=True, verbose_name="weight")),
                (
                    "chronic_conditions",
                    models.TextField(verbose_name="chronic_conditions"),
                ),
                ("allergies", models.TextField(blank=True, verbose_name="allergies")),
                (
                    "address",
                    models.CharField(
                        blank=True, max_length=255, verbose_name="address"
                    ),
                ),
                (
                    "workplace",
                    models.CharField(
                        blank=True, max_length=255, verbose_name="workplace"
                    ),
                ),
                (
                    "vaccinations",
                    models.TextField(blank=True, verbose_name="vaccinations"),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "ordering": ["-id"],
            },
        ),
    ]
