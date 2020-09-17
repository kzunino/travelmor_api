from django.contrib import admin
from .models import Currency


class CurrencyAdmin(admin.ModelAdmin):
    list_display = ('currency', 'trip')
    list_display_links = ('currency',)
    search_fields = ('currency', 'trip__name')


admin.site.register(Currency, CurrencyAdmin)
