from django.urls import path
from . import views
urlpatterns = [
    path('',views.UserRegister.as_view()),
]

