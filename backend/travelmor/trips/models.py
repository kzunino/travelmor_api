import uuid
from django.db import models

# Create your models here.


class Trips(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # user_uid = models.ForeignKey(
    #     User, related_name='leads',
    #     on_delete=models.CASCADE, null=True)
    trip_name = models.CharField(max_length=50)
    trip_currency = models.IntegerField()
    budget_total = models.DecimalField(max_digits=8, decimal_places=2)
    trip_length = models.IntegerField()
    start_date = models.DateField()
    end_date = modles.DateField()
