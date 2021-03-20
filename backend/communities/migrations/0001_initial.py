# Generated by Django 3.1.7 on 2021-03-20 21:43

import uuid

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Community",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("name", models.CharField(max_length=50)),
                ("description", models.TextField()),
                ("number_of_users", models.IntegerField(default=0)),
                ("invite_code", models.UUIDField(default=uuid.uuid4)),
            ],
            options={
                "verbose_name_plural": "communities",
            },
        ),
    ]
