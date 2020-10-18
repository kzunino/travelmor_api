from django.contrib import admin
from .models import Trip
from django.urls import reverse
from django.utils.safestring import mark_safe


class TripsAdmin(admin.ModelAdmin):
    list_display = ('name', 'user_email', )
    list_display_links = ('name',)
    readonly_fields = ('user_email',)
    list_filter = ('name', 'user__email')
    search_fields = ('name', 'user__first_name', 'user__email')
    list_per_page = 25

    def user_email(self, obj):
        # returns user email as link to User model
        return mark_safe('<a href="{}">{}</a>'.format(
            reverse("admin:users_user_change", args=(obj.user.pk,)),
            obj.user.email
        ))


admin.site.register(Trip, TripsAdmin)
