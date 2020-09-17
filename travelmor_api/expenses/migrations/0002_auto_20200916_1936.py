# Generated by Django 3.1.1 on 2020-09-16 19:36

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_auto_20200916_1936'),
        ('expenses', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='expense',
            name='user',
            field=models.ForeignKey(default='d2ac0e45-f042-4ff5-8314-baa49b66c8bf', on_delete=django.db.models.deletion.CASCADE, to='users.user'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='expense',
            name='purchase_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 9, 16, 19, 35, 23, 126953)),
        ),
    ]
