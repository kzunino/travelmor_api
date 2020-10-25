from django.urls import path, include
from .views import DefaultTripDetailView, DefaultTripList

# /api/default-trip/
urlpatterns = [
    path("", DefaultTripList.as_view(), name="default_trips"),
    path("<uuid:pk>", DefaultTripDetailView.as_view(), name="default_trips"),
]
