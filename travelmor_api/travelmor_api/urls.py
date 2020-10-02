from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from allauth.account.views import confirm_email
from .views import Logout


urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('rest_auth.urls')),
    path('logout/', Logout.as_view()),
    path('auth/registration/', include('rest_auth.registration.urls')),
    path('account/', include('allauth.urls')),
    url(r'^accounts-rest/registration/account-confirm-email/(?P<key>.+)/$',
        confirm_email, name='account_confirm_email'),
    path('api/user/', include('users.urls')),
    path('api/trip/', include('trips.urls')),
    path('api/expense/', include('expenses.urls')),
    path('api/currency/', include('currencies.urls')),

]
