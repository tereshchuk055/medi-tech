# Generated by Django 4.2.6 on 2023-12-05 21:08

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("authentication", "0004_remove_appuser_is_stuff_appuser_permissions_level"),
    ]

    operations = [
        migrations.AddField(
            model_name="appuser",
            name="is_stuff",
            field=models.BooleanField(default=False, verbose_name="stuff"),
        ),
    ]
