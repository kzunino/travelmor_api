from rest_framework.views import APIView
from rest_framework import authentication, permissions, status
from rest_framework.response import Response
from .models import Currency
from django.contrib.auth.models import User

from . import models
from .serializers import CurrencySerializer
from django.shortcuts import get_object_or_404, get_list_or_404
from travelmor_api.permissions import IsOwner

#  /api/currency/


class CurrencyList(APIView):
    """
    List all Currencies, or create a new Currency/ies.
     - to create multiple currencies at once, wrap objects in an array in
        post request.
    """
    authentication_classes = [authentication.TokenAuthentication]

    def get(self, request, format=None):
        currencies = Currency.objects.all()
        serializer = CurrencySerializer(currencies, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CurrencySerializer(
            data=request.data, many=True, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# /api/currency/uuid


class CurrencyDetailView(APIView):

    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsOwner]

    def get(self, request, pk, *args, **kwargs):
        currency = get_object_or_404(Currency, pk=pk)
        self.check_object_permissions(request, currency)
        serializer = CurrencySerializer(currency)
        return Response(serializer.data)

    def put(self, request, pk, format=None, *args, **kwargs):
        # takes request data and validates data format
        # throws 400 bad request if error
        # allows partial data to be submitted
        currency = get_object_or_404(Currency, pk=pk)
        self.check_object_permissions(request, currency)
        serializer = CurrencySerializer(
            currency, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        currency = get_object_or_404(Currency, pk=pk)
        self.check_object_permissions(request, currency)
        currency.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
