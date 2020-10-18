# Generated by Django 3.1.1 on 2020-09-21 19:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trips', '0007_auto_20200921_1843'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='trip',
            options={'ordering': ('-start_date',)},
        ),
        migrations.AlterField(
            model_name='trip',
            name='end_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 9, 21, 19, 43, 35, 982398)),
        ),
        migrations.AlterField(
            model_name='trip',
            name='start_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 9, 21, 19, 43, 35, 982378)),
        ),
    ]