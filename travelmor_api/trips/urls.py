from django.urls import path, include
from .views import TripDetailView, TripList

# /api/trip/
urlpatterns = [
    path('', TripList.as_view(), name='trips'),
    path('<uuid:pk>', TripDetailView.as_view(), name='trip')
]
