from django.urls import path, include
from .views import CurrencyDetailView, CurrencyList

# /api/currency/
urlpatterns = [
    path('', CurrencyList.as_view(), name='currencies'),
    path('<uuid:pk>', CurrencyDetailView.as_view(), name='currency')
]
