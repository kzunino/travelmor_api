from rest_framework.views import APIView
from rest_framework import authentication, permissions, status
from rest_framework.response import Response
from trips.models import Trip

from . import models
from .serializers import TripSerializer
from django.shortcuts import get_object_or_404
from travelmor_api.permissions import IsOwner


class TripDetailView(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsOwner]

    def get(self, request, pk, *args, **kwargs):
        trip = get_object_or_404(Trip, pk=pk)
        self.check_object_permissions(request, trip)
        serializer = TripSerializer(trip)
        return Response(serializer.data)

    def post(self, request, pk, format=None):
        # takes request data and validates data format
        # throws 400 bad request if error
        # allows partial data to be submitted
        trip = get_object_or_404(Trip, pk=pk)
        self.check_object_permissions(request, trip)
        serializer = TripSerializer(trip, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk, format=None):
        trip = get_object_or_404(Trip, pk=pk)
        self.check_object_permissions(request, trip)
        serializer = TripSerializer(trip, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk, format=None):
        trip = get_object_or_404(Trip, pk=pk)
        trip.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class TripList(APIView):
    """
    List all Trips, or create a new Trip.
    """
    authentication_classes = [authentication.TokenAuthentication]

    def get(self, request, format=None):
        trips = Trip.objects.all()
        serializer = TripSerializer(trips, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TripSerializer(data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
