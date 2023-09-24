from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import VisitablePlaceSerializer
from .models import VisitablePlace, PlacePosts, Comment
from posts.models import VisitorStory, StoryImage, StoryVideo

class GetPlaceView(APIView):
    def get(request):
        return Response({'data':'data'})
    
class PlaceInfoView(APIView):
    def get(self, request,  **kwargs):
        place = get_object_or_404(VisitablePlace, id=id)
        serializer = VisitablePlaceSerializer(instance=place)
        return Response(serializer, status=status.HTTP_200_OK)
        
class PlacePostsView(APIView):
    def get(self, request, **kwargs):
        id  = self.kwargs.get('id')
        posts = PlacePosts.objects.all().filter(place_id = id)
        return Response(posts, status=status.HTTP_200_OK)
    
class PlaceStoriesView(APIView):
    def get(self, request,**kwargs):
        id = self.kwargs.get('id')
        stories = Pla
        

