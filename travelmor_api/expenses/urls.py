from django.urls import path, include
from .views import ExpenseDetailView

# /api/expense/
urlpatterns = [
    path('<uuid:pk>', ExpenseDetailView.as_view(), name='expense')
]
