from django.urls import path, include
from .views import UserDetailView

# /users/
urlpatterns = [
    path('me', UserDetailView.as_view(), name='user')

]
