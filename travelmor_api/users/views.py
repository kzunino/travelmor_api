from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import User

from . import models
from .serializers import UserSerializer
from django.shortcuts import get_object_or_404


class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Gets auth user then serializes the DATA to JSON and returns it
        user = get_object_or_404(User, pk=request.user.id)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request, format=None):
        # takes request data and validates data format
        # throws 400 bad request if error
        user = get_object_or_404(User, pk=request.user.id)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response()

    def delete(self, request, format=None):
        user = get_object_or_404(User, pk=request.user.id)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
