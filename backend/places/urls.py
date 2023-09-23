from django.urls import path
from . import views
urlpatterns = [
    path('', views.GetPlaceView.as_view())
]

