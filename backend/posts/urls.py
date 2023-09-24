from django.urls import path
from . import views
urlpatterns = [
    path('get_user_posts/<int:user_id>/',views.GetPostView.as_view(), name="user_posts"),
    path('create_post/', views.GetPostView.as_view(), name='create_post'),
    path('post/<int:id>/', views.GetPostView.as_view(), name="user_posts"),
]

