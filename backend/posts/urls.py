from django.urls import path
from .views import (
    VisitorStoryListCreateView,
    VisitorStoryRetrieveUpdateDestroyView,
    StoryImageListCreateView,
    StoryImageRetrieveUpdateDestroyView,
    StoryVideoListCreateView,
    StoryVideoRetrieveUpdateDestroyView,
)

urlpatterns = [
    path('visitor-stories/', VisitorStoryListCreateView.as_view(), name='visitor-story-list'),
    path('visitor-stories/<int:pk>/', VisitorStoryRetrieveUpdateDestroyView.as_view(), name='visitor-story-detail'),
    path('story-images/', StoryImageListCreateView.as_view(), name='story-image-list'),
    path('story-images/<int:pk>/', StoryImageRetrieveUpdateDestroyView.as_view(), name='story-image-detail'),
    path('story-videos/', StoryVideoListCreateView.as_view(), name='story-video-list'),
    path('story-videos/<int:pk>/', StoryVideoRetrieveUpdateDestroyView.as_view(), name='story-video-detail'),
]