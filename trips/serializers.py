from rest_framework import serializers
from .models import Trip
from expenses.serializers import ExpenseSerializer
from currencies.serializers import CurrencySerializer


class TripSerializer(serializers.ModelSerializer):
    expenses = ExpenseSerializer(many=True, read_only=True)
    currencies = CurrencySerializer(many=True, read_only=True)

    class Meta:
        model = Trip
        fields = ('trip_uid', 'user', 'name', 'total_budget',
                  'length', 'home_currency', 'currencies', 'expenses', 'start_date', 'end_date')


class TripListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Trip
        fields = ('trip_uid', 'name', 'start_date', 'end_date')
