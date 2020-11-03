from rest_framework.views import APIView
from rest_framework import authentication, permissions, status
from rest_framework.response import Response
from .models import Expense

from . import models
from .serializers import ExpenseSerializer
from django.shortcuts import get_object_or_404, get_list_or_404
from travelmor_api.permissions import IsOwner

# /api/expense/


class ExpenseList(APIView):
    """
    List all Expenses, or create a new Expense.
    """

    authentication_classes = [authentication.TokenAuthentication]

    def get(self, request, format=None):
        expenses = Expense.objects.all()
        serializer = ExpenseSerializer(expenses, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ExpenseSerializer(data=request.data, many=True, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# /api/expense/<expense uid>
class ExpenseDetailView(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsOwner]

    def get(self, request, pk, *args, **kwargs):
        expense = get_object_or_404(Expense, pk=pk)
        self.check_object_permissions(request, expense)
        serializer = ExpenseSerializer(expense)
        return Response(serializer.data)

    def put(self, request, pk, format=None, *args, **kwargs):
        # takes request data and validates data format
        # throws 400 bad request if error
        # allows partial data to be submitted
        expense = get_object_or_404(Expense, pk=pk)
        self.check_object_permissions(request, expense)
        serializer = ExpenseSerializer(expense, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk, format=None):
        expense = get_object_or_404(Expense, pk=pk)
        self.check_object_permissions(request, expense)
        expense.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# /api/expense/delete_multiple
class DeleteMultipleExpensesView(APIView):
    """
    Deletes multiple expenses
    """

    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsOwner]

    def post(self, request, format=None):
        id_list = request.data
        expenses = Expense.objects.filter(pk__in=id_list)
        expenses.delete()
        return Response({"msg": "Items deleted"}, status=status.HTTP_204_NO_CONTENT)
