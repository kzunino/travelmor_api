from django.urls import path, include
from .views import UserDetailView

# /api/user/
urlpatterns = [
    path('me', UserDetailView.as_view(), name='user')

]
