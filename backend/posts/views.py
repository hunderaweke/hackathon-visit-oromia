from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

from rest_framework import generics
from .models import VisitorStory, StoryImage, StoryVideo
from .serializers import VisitorStorySerializer, StoryImageSerializer, StoryVideoSerializer

class VisitorStoryListCreateView(generics.ListCreateAPIView):
        queryset = VisitorStory.objects.all()
        serializer_class = VisitorStorySerializer
        def post(self, request, *args, **kwargs):
            images_data = request.data.pop('images', [])
            videos_data = request.data.pop('videos', [])

            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)

            story = serializer.instance

            image_serializer = StoryImageSerializer(data=images_data, many=True)
            image_serializer.is_valid(raise_exception=True)
            image_serializer.save(story=story)

            video_serializer = StoryVideoSerializer(data=videos_data, many=True)
            video_serializer.is_valid(raise_exception=True)
            video_serializer.save(story=story)

            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
'''
request to the above endpoint 

{
  "user": 1,
  "place": 1,
  "caption": "Some caption",
  "date_posted": "2023-09-24T12:00:00",
  "images": [
    {
      "image": <base64-encoded-image-data>
    },
    {
      "image": <base64-encoded-image-data>
    }
  ],
  "videos": [
    {
      "video": <base64-encoded-video-data>
    },
    {
      "video": <base64-encoded-video-data>
    }
  ]
}

'''




class VisitorStoryRetrieveUpdateDestroyView(generics.GenericAPIView):
    queryset = VisitorStory.objects.all()
    serializer_class = VisitorStorySerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class StoryImageListCreateView(generics.ListCreateAPIView):
    queryset = StoryImage.objects.all()
    serializer_class = StoryImageSerializer

class StoryImageRetrieveUpdateDestroyView(generics.GenericAPIView):
    queryset = StoryImage.objects.all()
    serializer_class = StoryImageSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class StoryVideoListCreateView(generics.ListCreateAPIView):
    queryset = StoryVideo.objects.all()
    serializer_class = StoryVideoSerializer

class StoryVideoRetrieveUpdateDestroyView(generics.GenericAPIView):
    queryset = StoryVideo.objects.all()
    serializer_class = StoryVideoSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)