from rest_framework import serializers
from .models import *



class CustomUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    nation = serializers.CharField()


    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)