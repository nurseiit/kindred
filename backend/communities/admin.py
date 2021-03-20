from django.contrib import admin

from .models import Community


@admin.register(Community)
class CommunityAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "description",
        "number_of_users",
        "invite_code",
        "created_at",
        "updated_at",
    )
    readonly_fields = (
        "number_of_users",
        "invite_code",
    )
