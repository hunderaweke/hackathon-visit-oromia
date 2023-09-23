from django.urls import path
from . import views
urlpatterns = [
    path('',views.GetPostView.as_view())
]

