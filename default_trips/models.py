from django.db import models

# from datetime import datetime
import uuid
from trips.models import Trip
from users.models import User


class Default_trip(models.Model):
    default_trip_uid = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False
    )
    trip_uid = models.ForeignKey(Trip, on_delete=models.CASCADE)
    user = models.ForeignKey(
        User, related_name="default_trips", on_delete=models.CASCADE
    )
