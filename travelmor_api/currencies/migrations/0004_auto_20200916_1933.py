# Generated by Django 3.1.1 on 2020-09-16 19:33

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('currencies', '0003_auto_20200916_1933'),
    ]

    operations = [
        migrations.AlterField(
            model_name='currency',
            name='created_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 9, 16, 19, 33, 56, 511204)),
        ),
    ]
