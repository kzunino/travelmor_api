from django.urls import path, include
from .views import ExpenseDetailView, ExpenseList

# /api/expense/
urlpatterns = [
    path('', ExpenseList.as_view(), name='expenses'),
    path('<uuid:pk>', ExpenseDetailView.as_view(), name='expense')
]
