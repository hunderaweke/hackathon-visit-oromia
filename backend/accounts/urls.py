from django.urls import path
from . import views
urlpatterns = [
    path('get_use/<int:id>/',views.UserRegister.as_view(), name="get_user"),
    path('register/', views.UserRegister.as_view(), name="register_user"),
    path('user/<int:id>/',views.UserRegister.as_view(), name="ipdate_user"),
]

