from rest_framework import serializers
from .models import VisitablePlace
from accounts.serializers import CustomUserSerializer

class VisitablePlaceSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    description = serializers.CharField()
    region = serializers.CharField()
    latitude = serializers.CharField()
    longitude = serializers.FloatField()
    category = serializers.CharField()
    
    class Meta:
        model = VisitablePlace
        fields = '__all__'


class PlacePostsSerializer(serializers.ModelSerializer):
    place = VisitablePlaceSerializer()
    text =  serializers.CharField()
    photo = serializers.ImageField()
    video = serializers.FileField()
    


class CommentSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()
    text =  serializers.CharField()
    photo = serializers.ImageField()
    commented_user = serializers.DateTimeField()

class HotelSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    latitude = serializers.FloatField()
    longtude =  serializers.FloatField()
    description = serializers.TextField()
    photo = serializers.ImageField()
    
   