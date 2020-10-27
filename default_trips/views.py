from rest_framework.views import APIView
from rest_framework import authentication, permissions, status
from rest_framework.response import Response
from .models import Default_trip

from . import models
from .serializers import DefaultTripSerializer
from django.shortcuts import get_object_or_404, get_list_or_404
from travelmor_api.permissions import IsOwner

# /api/default-trip/


class DefaultTripList(APIView):
    """
    List all Default Trips, or create a new Default Trip.
    """

    authentication_classes = [authentication.TokenAuthentication]

    def get(self, request, format=None):
        default_trips = Default_trip.objects.all()
        serializer = DefaultTripSerializer(default_trips, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = DefaultTripSerializer(data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# /api/default-trip/<default_trip uid>
class DefaultTripDetailView(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsOwner]

    def get(self, request, pk, *args, **kwargs):
        default_trip = get_object_or_404(Default_trip, pk=pk)
        self.check_object_permissions(request, default_trip)
        serializer = DefaultTripSerializer(default_trip)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        default_trip = get_object_or_404(Default_trip, pk=pk)
        self.check_object_permissions(request, default_trip)
        default_trip.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
