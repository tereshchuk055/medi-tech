# Generated by Django 4.2.6 on 2023-11-06 01:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appuser',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
