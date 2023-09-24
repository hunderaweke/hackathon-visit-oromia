from rest_framework import serializers
from .models import *

class VisitorStorySerializers(serializers.ModelSerializer):
    user = serializers.CustomUser() 
    place = serializers.VisitablePlace()
    caption = serializers.TextField(null=True, blank=True)
    date_posted = serializers.DateTimeField(auto_now_add=True)
    


class StoryImageSerializers(serializers.ModelSerializer):
    image = serializers.ImageField(upload_to='stories/images')
    story = serializers.VisitorStory()
      



class StoryVideoSerializers(serializers.ModelSerializer):
    video = serializers.FileField(upload_to='stories/videos')
    story = serializers.VisitorStory()
    