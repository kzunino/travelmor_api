from django.db import models
# from datetime import datetime
from django.utils import timezone
import uuid
from trips.models import Trip
from users.models import User


class Currency(models.Model):
    currency_uid = models.UUIDField(primary_key=uuid.uuid4,
                                    default=uuid.uuid4, editable=False)
    trip = models.ForeignKey(
        Trip, related_name='currencies', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
    currency = models.CharField(max_length=3)
    exchange_rate = models.DecimalField(
        max_digits=8, decimal_places=4, blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now, blank=True,)

    def __str__(self):
        return self.currency
