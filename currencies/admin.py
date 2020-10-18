from django.contrib import admin
from .models import Currency


class CurrencyAdmin(admin.ModelAdmin):
    list_display = ('currency_uid', 'currency', 'trip')
    list_display_links = ('currency_uid', 'currency',)
    search_fields = ('currency_uid', 'currency', 'trip__name')


admin.site.register(Currency, CurrencyAdmin)
