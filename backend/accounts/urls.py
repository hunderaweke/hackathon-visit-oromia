from django.urls import path
from . import views
urlpatterns = [
    path('login/', views.UserLoginView.as_view(), name='login'),
    path('get_user/<int:id>/',views.UserCreationView.as_view(), name="get_user"),
    path('register/', views.UserCreationView.as_view(), name="register_user"),
    path('get_users/', views.GetUserView.as_view(), name='get_users'),
    path('visitor_profile/', views.VisitorProfileView.as_view(), name='visitor_profile'),
]

