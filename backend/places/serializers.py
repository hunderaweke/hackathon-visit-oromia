from rest_framework import serializers
from .models import *
from accounts.serializers import CustomUserSerializer

class VisitablePlaceSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    description = serializers.CharField()
    regione = serializers.CharField()
    latin = serializers.CharField()
    zotude = serializers.FloatField()
    longitude = serializers.FloatField()
    category = serializers.CharField()


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

