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
from .models import VisitablePlace, PlacePosts, Comment, Hotel
from posts.models import VisitorStory, StoryImage, StoryVideo

from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .distance_calculator import haversine_distance
from rest_framework import generics, permissions
from rest_framework.permissions import AllowAny
from rest_framework.pagination import LimitOffsetPagination

class TouristSitesView(generics.ListAPIView):
    queryset = VisitablePlace.objects.all()
    serializer_class = VisitablePlaceSerializer
    pagination_class = LimitOffsetPagination

class TouristSiteInfoView(APIView):
    authentication_classes = ['JWTAuthentication']
    
    def get(self, request, **kwargs):
        place_id = kwargs.get('id')
        try:
            place = get_object_or_404(VisitablePlace, id=place_id)
            serializer = VisitablePlaceSerializer(instance=place)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except VisitablePlace.DoesNotExist:
            return Response({'error': 'Place not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class TouristSitePostsView(APIView):
    def get(self, request, **kwargs):
        place_id = kwargs.get('id')
        try:
            posts = PlacePosts.objects.filter(place_id=place_id)
            return Response(posts, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class TouristSiteStoriesView(APIView):
    def get(self, request, **kwargs):
        place_id = kwargs.get('id')
        try:
            stories = VisitorStory.objects.filter(place_id=place_id)
            return Response(stories, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class TouristSiteCommentsView(APIView):
    def get(self, request, **kwargs):
        place_id = kwargs.get('id')
        try:
            comments = Comment.objects.filter(place_id=place_id)
            return Response(comments, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class NearByHotelsView(APIView):
    def get(self, request):
        id = request.request.query_params.get('place_id')
        latitude = request.query_params.get('latitude')
        longitude = request.query_params.get('longitude')
        distance_range = request.query_params.get('distance')
        search_mode = request.query_params('search_mode')
        
        nearby_hotels = []
        hotels = Hotel.objects.all()
        if search_mode == 'by_location':
            for hotel in hotels:
                if haversine_distance(float(latitude), float(longitude), float(hotel.longitude), float(hotel.longitude)) <= float(distance_range):
                    nearby_hotels.append(hotel)
            serializer = ''
            
        else:
            place = get_object_or_404(VisitablePlace, id=id)
            place_latitude = place.latitude
            place_longtude = place.longitude
            hotels = Hotel.objects.all()
            
        
        
        # Implement the logic for retrieving nearby hotels
        return Response({'data': 'Nearby hotels'})
    

class NearbyTouristPlacesView(APIView):
    def get(self, request):
        latitude = request.query_params.get('latitude')
        longitude = request.query_params.get('longitude')
        distance_in_km = request.query_params.get('distance')  # Distance in kilometers

        if latitude is None or longitude is None or distance_in_km is None:
            return Response({'error': 'Latitude, longitude, and distance parameters are required.'}, status=400)
        nearby_places = []
            
        places = VisitablePlace.objects.all()
            
        for place in places:
            if haversine_distance(float(latitude), float(longitude), float(place.longitude), float(place.longitude)) <= float(distance_in_km):
                nearby_places.append(place)
            
            # Serialize the nearby places and return the response
        serializer = VisitablePlaceSerializer(nearby_places, many=True)
        return Response(serializer.data)
