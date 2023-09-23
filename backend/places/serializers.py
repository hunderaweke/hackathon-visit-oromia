from rest_framework import serializers
from .models import *

class VisitablePlaceSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=255)
    description = serializers.TextField()
    regione = serializers.CharField(max_length=255)
    latin = serializers.CharField(max_length=255)
    zotude = serializers.FloatField()
    longitude = serializers.FloatField()
    category = serializers.CharField(max_length=255)


class PlacePostsSerializer(serializers.ModelSerializer):
    place = VisitablePlaceSerializer()
    text =  serializers.TextField()
    photo = serializers.ImageField(upload_to=f'places/posts/photos', null=True, blank=True)
    video = serializers.FileField(upload_to='places/posts/videos', null=True, blank=True)
    


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.CustomUser()
    text =  serializers.TextField()
    photo = serializers.ImageField(upload_to=f'places/posts/photos', null=True, blank=True)
    commented_user = serializers.DateTimeField(auto_now_add=True)

