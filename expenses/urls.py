from django.urls import path, include
from .views import ExpenseDetailView, ExpenseList, DeleteMultipleExpensesView

# /api/expense/
urlpatterns = [
    path("", ExpenseList.as_view(), name="expenses"),
    path("<uuid:pk>", ExpenseDetailView.as_view(), name="expense"),
    path(
        "delete_multiple", DeleteMultipleExpensesView.as_view(), name="delete_multiple"
    ),
]
