# Generated by Django 3.1.1 on 2020-09-21 19:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expenses', '0004_auto_20200921_1843'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expense',
            name='purchase_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 9, 21, 19, 43, 35, 983181)),
        ),
    ]
