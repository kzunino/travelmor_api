from rest_framework import serializers
from users.models import User

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
    class Meta:
        model = User
        fields = (
            'id',
            'first_name',
            'last_name',
            'home_currency',
        )
