from django.db import models
from datetime import datetime
import uuid
from trips.models import Trip


class Currency(models.Model):
    currency_uid = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE)
    currency = models.CharField(max_length=3)
    created_at = models.DateTimeField(default=datetime.now(), blank=True)

    def __str__(self):
        return self.currency
