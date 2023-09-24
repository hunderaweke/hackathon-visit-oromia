from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

from rest_framework import generics
from .models import VisitorStory, StoryImage, StoryVideo
from .serializers import VisitorStorySerializer, StoryImageSerializer, StoryVideoSerializer

class VisitorStoryListCreateView(generics.ListCreateAPIView):
    queryset = VisitorStory.objects.all()
    serializer_class = VisitorStorySerializer

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