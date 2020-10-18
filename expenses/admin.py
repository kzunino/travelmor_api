from django.contrib import admin
from .models import Expense
from django.urls import reverse
from django.utils.safestring import mark_safe


class ExpenseAdmin(admin.ModelAdmin):
    list_display = ('name', 'expense_type', 'trip', 'user', 'user_email')
    list_display_links = ('name', 'trip', 'user', 'expense_type')
    readonly_fields = ('user_email',)
    list_filter = ('user__first_name', 'expense_type', 'user__email')
    search_fields = ('name', 'expense_type',  'trip__name',
                     'user__first_name', 'user__email')
    list_per_page = 25

    def user_email(self, obj):
        # returns user email as link to User model
        return mark_safe('<a href="{}">{}</a>'.format(
            reverse("admin:users_user_change", args=(obj.user.pk,)),
            obj.user.email
        ))


admin.site.register(Expense, ExpenseAdmin)
