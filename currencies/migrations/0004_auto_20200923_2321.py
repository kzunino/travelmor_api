# Generated by Django 3.1.1 on 2020-09-23 23:21

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('currencies', '0003_auto_20200921_1943'),
    ]

    operations = [
        migrations.AlterField(
            model_name='currency',
            name='created_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 9, 23, 23, 21, 51, 30462)),
        ),
    ]
