from django.contrib import admin

from .models import Community


@admin.register(Community)
class CommunityAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "description",
        "invite_code",
        "created_at",
        "updated_at",
    )
    readonly_fields = ("invite_code",)
