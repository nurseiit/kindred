from common.models import TimeStampModel
from django.conf import settings
from django.db import models


class Post(TimeStampModel):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name="posts",
        on_delete=models.CASCADE,
    )
    title = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.title
