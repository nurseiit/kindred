from rest_framework import serializers


class InviteCodeSerializer(serializers.Serializer):
    invite_code = serializers.UUIDField(format="hex_verbose")
