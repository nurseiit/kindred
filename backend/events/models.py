from common.models import TimeStampModel
from communities.models import Community
from django.conf import settings
from django.db import models


class Event(TimeStampModel):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name="events",
        on_delete=models.CASCADE,
    )
    community = models.ForeignKey(
        Community, related_name="events", on_delete=models.CASCADE
    )
    title = models.CharField(max_length=50)
    description = models.TextField()
    start = models.DateTimeField()
    end = models.DateTimeField()

    def __str__(self):
        return self.title
