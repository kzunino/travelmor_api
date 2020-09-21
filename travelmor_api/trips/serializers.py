from rest_framework import serializers
from .models import Trip


class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = ('trip_uid', 'user', 'name', 'total_budget',
                  'length', 'home_currency', 'start_date', 'end_date')
