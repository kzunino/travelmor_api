# Generated by Django 3.1.1 on 2020-10-02 19:21

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trips', '0012_auto_20201002_1815'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trip',
            name='end_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 10, 2, 19, 21, 54, 40538)),
        ),
        migrations.AlterField(
            model_name='trip',
            name='start_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 10, 2, 19, 21, 54, 40518)),
        ),
    ]
