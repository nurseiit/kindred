# Generated by Django 3.1.7 on 2021-03-20 22:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("communities", "0002_community_users"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="community",
            name="number_of_users",
        ),
    ]
