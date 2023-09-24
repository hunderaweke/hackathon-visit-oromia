from rest_framework import serializers
from .models import VisitorStory, StoryImage, StoryVideo

class StoryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoryImage
        fields = '__all__'

class StoryVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoryVideo
        fields = '__all__'

class VisitorStorySerializer(serializers.ModelSerializer):
    images = StoryImageSerializer(many=True)
    videos = StoryVideoSerializer(many=True)

    class Meta:
        model = VisitorStory
        fields = ['id', 'user', 'place', 'caption', 'date_posted', 'images', 'videos']

    def create(self, validated_data):
        images_data = validated_data.pop('images', [])
        videos_data = validated_data.pop('videos', [])

        story = VisitorStory.objects.create(**validated_data)

        for image_data in images_data:
            StoryImage.objects.create(story=story, **image_data)

        for video_data in videos_data:
            StoryVideo.objects.create(story=story, **video_data)

        return story