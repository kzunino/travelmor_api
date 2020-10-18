from django.db import models
# from datetime import datetime
from django.utils import timezone
import uuid
from trips.models import Trip
from users.models import User


class Expense(models.Model):
    expense_uid = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    trip = models.ForeignKey(
        Trip, related_name='expenses', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    cost = models.DecimalField(max_digits=8, decimal_places=2)
    expense_type = models.CharField(max_length=20)
    currency = models.CharField(max_length=3)
    home_currency = models.CharField(max_length=3, blank=True)
    cost_conversion = models.DecimalField(
        max_digits=12, decimal_places=3, blank=True)
    exchange_rate = models.DecimalField(max_digits=12, decimal_places=3)
    purchase_date = models.DateTimeField(default=timezone.now, blank=True)

    def __str__(self):
        return self.name
