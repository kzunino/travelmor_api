from rest_framework.views import APIView
from rest_framework import authentication, permissions, status
from rest_framework.response import Response
from .models import User

from . import models
from .serializers import UserSerializer
from django.shortcuts import get_object_or_404
from travelmor_api.permissions import IsSelf


class UserDetailView(APIView):
    '''
    Get, update, or delete a user's information 
    '''
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsSelf]

    def get(self, request, *args, **kwargs):
        # Gets auth user then serializes the DATA to JSON and returns it
        user = get_object_or_404(User, pk=request.user.id)
        self.check_object_permissions(request, user)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request, format=None):
        # takes request data and validates data format
        # throws 400 bad request if error
        user = get_object_or_404(User, pk=request.user.id)
        self.check_object_permissions(request, user)
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, format=None):
        user = get_object_or_404(User, pk=request.user.id)
        self.check_object_permissions(request, user)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
