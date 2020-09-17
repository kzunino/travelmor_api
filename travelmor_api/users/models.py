from django.db import models
import uuid
from datetime import datetime


class User(models.Model):
    user_uid = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=40)
    email = models.EmailField(unique=True)
    home_currency = models.CharField(max_length=3)
    created_at = models.DateTimeField(default=datetime.now(), blank=True)

    def __str__(self):
        return self.first_name

    def get_email(self):
        return self.email
