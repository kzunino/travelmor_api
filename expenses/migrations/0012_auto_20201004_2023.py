# Generated by Django 3.1.1 on 2020-10-04 20:23

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expenses', '0011_auto_20201003_1859'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expense',
            name='purchase_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 10, 4, 20, 23, 0, 923587)),
        ),
    ]
