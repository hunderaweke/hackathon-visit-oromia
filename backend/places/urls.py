from django.urls import path
from . import views
urlpatterns = [
    path('create',views.GetPlaceView.as_view(), name="create_place"),
    path('get_place_info/<int:id>/',views.GetPlaceView.as_view(), name="views.GetPlaceView.as_view()" ),
    path('get_posts/<int:id>/', views.PlacePosts.as_view(), name="get_place_posts"),
    path('get_stories_of_place/<int:id>', views.GetPlaceView.as_view(), name="get_place_stories"),
    path("get_comments_of_place/<int:id>/", views.GetPlaceView.as_view(), name="get_comments_of_place"),
    path('get_near_by_hotels/<int:id>', views.GetPlaceView.as_view(), name="get_nearby_hotels"),
    path('', views.GetPlaceView.as_view())
]

