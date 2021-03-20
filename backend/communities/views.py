from django.shortcuts import render
from rest_framework import permissions, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Community
from .permissions import IsMemberOrReadOnly
from .serializers import CommunitySerializer


class CommunityViewSet(viewsets.ModelViewSet):
    queryset = Community.objects.all()
    serializer_class = CommunitySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsMemberOrReadOnly]

    @action(
        detail=True, methods=["post"], permission_classes=[permissions.IsAuthenticated]
    )
    def enroll(self, request, pk=None):
        community = self.get_object()
        user = request.user
        community.users.add(user)
        community.save()
        return Response({"status": "You successfully enrolled to this community."})
