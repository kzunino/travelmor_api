# Generated by Django 3.1.1 on 2020-09-21 05:26

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trips', '0004_auto_20200921_0519'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trip',
            name='end_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 9, 21, 5, 26, 0, 561901)),
        ),
        migrations.AlterField(
            model_name='trip',
            name='start_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 9, 21, 5, 26, 0, 561883)),
        ),
    ]