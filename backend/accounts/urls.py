from django.urls import path
from . import views
urlpatterns = [
    path('login/', views.UserLoginView.as_view(), name='login'),
    
    path('get_user/<int:id>/',views.UserCreationView.as_view(), name="get_user"),
    path('register/', views.UserCreationView.as_view(), name="register_user"),
]

