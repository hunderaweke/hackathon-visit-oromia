from rest_framework import serializers
from .models import VisitablePlace, Hotel, SiteReccomendation, DamageReport,Comment, PlacePosts
from accounts.serializers import CustomUserSerializer

class VisitablePlaceSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    description = serializers.CharField()
    region = serializers.CharField()
    latitude = serializers.CharField()
    longitude = serializers.FloatField()
    category = serializers.CharField()
    distance = serializers.FloatField()
    class Meta:
        model = VisitablePlace
        fields = '__all__'


class PlacePostsSerializer(serializers.ModelSerializer):
    class Meta:
        name = PlacePosts
        fields = '__all__'
    


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Comment
        fields = '__all__'

class HotelSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    latitude = serializers.FloatField()
    longtude =  serializers.FloatField()
    description = serializers.CharField()
    photo = serializers.ImageField()
    
    class Meta:
        model = Hotel
        fields = '__all__'
        

class RecommendatiomSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteReccomendation
        exclude = ['user']
        
class DamagereportSerializer(serializers.ModelSerializer):
    class Meta:
        model = DamageReport
        exclude = 'user'