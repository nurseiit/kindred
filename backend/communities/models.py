import uuid

from common.models import TimeStampModel
from django.conf import settings
from django.db import models


class Community(TimeStampModel):
    name = models.CharField(max_length=50)
    description = models.TextField()
    users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="communities")
    invite_code = models.UUIDField(default=uuid.uuid4)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "communities"
