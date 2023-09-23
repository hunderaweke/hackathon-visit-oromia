from rest_framework import serializers
from .models import *

class VisitablePlaceSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    description = serializers.TextField()
    regione = serializers.CharField()
    latin = serializers.CharField()
    zotude = serializers.FloatField()
    longitude = serializers.FloatField()
    category = serializers.CharField()


class PlacePostsSerializer(serializers.ModelSerializer):
    place = VisitablePlaceSerializer()
    text =  serializers.TextField()
    photo = serializers.ImageField()
    video = serializers.FileField()
    


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.CustomUser()
    text =  serializers.TextField()
    photo = serializers.ImageField(upload_to=f'places/posts/photos', null=True, blank=True)
    commented_user = serializers.DateTimeField(auto_now_add=True)

