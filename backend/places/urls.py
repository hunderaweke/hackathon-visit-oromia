from django.urls import path
from . import views

urlpatterns = [
    path('get_tourist_sites/', views.TouristSitesView.as_view(), name="sites"),
    path('get_tourist_site_info/<int:id>/',views.TouristSiteInfoView.as_view(), name="place_info" ),
    path('get_tourist_site_posts/<int:id>/', views.TouristSitePostsView.as_view(), name="get_place_posts"),
    path('get_tourist_site_stories/<int:id>/', views.TouristSiteStoriesView.as_view(), name="get_place_stories"),
    path("get_tourist_site_comments/<int:id>/", views.TouristSiteCommentsView.as_view(), name="get_comments_of_place"),
    path('get_near_by_hotels/', views.NearByHotelsView.as_view(), name="get_nearby_hotels"),
    path('get_nearby_tourist_places/', views.NearbyTouristPlacesView.as_view(), name='nearby_places'),
    path('site_recommendation/', views.SiteReccomendationView.as_view(), name='site_recommendation'),
    path('damage_recomendation', views.DamageRecommendationView.as_view(), name='damage_recommendation'),
    path('search/', views.SearchView.as_view(), name='search'),
    #latitude and longtde nedded
]