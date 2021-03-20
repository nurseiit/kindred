from common.serializers import InviteCodeSerializer
from django.core.exceptions import MultipleObjectsReturned, ObjectDoesNotExist
from posts.serializers import PostSerializer
from rest_framework import permissions, status, viewsets
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
        detail=False, methods=["post"], permission_classes=[permissions.IsAuthenticated]
    )
    def enroll(self, request, pk=None):
        user = request.user

        serializer = InviteCodeSerializer(data=request.data)
        if serializer.is_valid():

            try:
                community = Community.objects.get(
                    invite_code=serializer.validated_data["invite_code"]
                )
            except (ObjectDoesNotExist, MultipleObjectsReturned):

                return Response(
                    {"error": "Invite code doesn't match."},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            community.users.add(user)
            community.save()
            return Response(
                {"status": f"You successfully enrolled to {community} community."}
            )

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=["get"], permission_classes=[IsMemberOrReadOnly])
    def posts(self, request, pk=None):
        community = self.get_object()
        serializer = PostSerializer(community.posts.all(), many=True)
        return Response(serializer.data)
