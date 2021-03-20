import uuid

from common.models import TimeStampModel
from django.conf import settings
from django.db import models


class Community(TimeStampModel):
    name = models.CharField(max_length=50)
    description = models.TextField()
    users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="communities")
    number_of_users = models.IntegerField(default=0)
    invite_code = models.UUIDField(default=uuid.uuid4)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.number_of_users = self.users.all().count()
        super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "communities"
