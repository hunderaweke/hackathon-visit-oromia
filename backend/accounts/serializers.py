from rest_framework import serializers
from .models import *



class CustomUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    first_name = serializers.CharField()
    password  = serializers.CharField()
    
    class Meta:
        model = CustomUser
        fields  = ['email',  'first_name', 'password']