# Generated by Django 3.1.1 on 2020-10-21 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trips', '0019_auto_20201021_1835'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trip',
            name='total_budget',
            field=models.DecimalField(decimal_places=2, max_digits=14),
        ),
    ]