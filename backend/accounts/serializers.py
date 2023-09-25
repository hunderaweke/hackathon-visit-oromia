from rest_framework import serializers
from .models import CustomUser, Visitor



class CustomUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    first_name = serializers.CharField()
    password  = serializers.CharField()
    
    class Meta:
        model = CustomUser
        fields = ['email', 'first_name', 'password']
        
class VisitorSerializer(serializers.ModelSerializer):
    profile_picture = serializers.CharField()
    
    class Meta:
        model = Visitor
        fields = ['personal_note', 'profile_picture']