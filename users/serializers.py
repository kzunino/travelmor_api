from django.contrib.auth import get_user_model
from rest_auth.serializers import TokenSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from users.models import User
from trips.models import Trip
from trips.serializers import TripSerializer, TripListSerializer

from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email

from rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers

# Adds extra fields to the custom registration serializer


class CustomRegisterSerializer(RegisterSerializer):
    first_name = serializers.CharField(max_length=20, required=True)
    last_name = serializers.CharField(max_length=30, required=True)
    home_currency = serializers.CharField(max_length=3, required=True)

    def get_cleaned_data(self):
        # super inherits the email, password and pass2 from get_cleaned_data from RegisterSerializer
        data_dict = super().get_cleaned_data()
        data_dict['first_name'] = self.validated_data.get('first_name', '')
        data_dict['last_name'] = self.validated_data.get('last_name', '')
        data_dict['home_currency'] = self.validated_data.get(
            'home_currency', '')
        return data_dict


class UserSerializer(serializers.ModelSerializer):
    '''
    Gets user data and the trips to render to the dashboard links
    '''
    trips = TripListSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = (
            'id',
            'first_name',
            'last_name',
            'email',
            'home_currency',
            'trips',
        )


class UserTokenSerializer(serializers.ModelSerializer):
    trips = TripListSerializer(many=True, read_only=True)

    class Meta:
        model = get_user_model()
        fields = ('id',
                  'first_name',
                  'last_name',
                  'email',
                  'home_currency',
                  'trips',)


class CustomTokenSerializer(TokenSerializer):
    user = UserTokenSerializer(read_only=True)

    class Meta(TokenSerializer.Meta):
        fields = ('key', 'user')
