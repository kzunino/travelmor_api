from rest_framework import serializers
from .models import Default_trip


class DefaultTripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Default_trip
        fields = "__all__"


class DefaultTripListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Default_trip
        fields = ("trip_uid",)
