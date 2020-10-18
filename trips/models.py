from django.db import models
import uuid
from datetime import datetime
from django.utils import timezone
from users.models import User


class Trip(models.Model):
    trip_uid = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, related_name='trips',
                             on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    total_budget = models.DecimalField(max_digits=7, decimal_places=2)
    length = models.IntegerField()
    home_currency = models.CharField(max_length=3)
    start_date = models.DateTimeField(default=timezone.now, blank=True)
    end_date = models.DateTimeField(default=timezone.now, blank=True)

    def __str__(self):
        return self.name

    def user_email(self):
        return self.user.email

    class Meta:
        ordering = ('-start_date',)
