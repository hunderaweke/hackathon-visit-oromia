from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import CustomUser
from .serializers import *

# Create your views here.

class UserRegister(APIView):
    def get(request):
        return Response({'data':'test'})
      
class UserView(APIView):
    def get(self, request, *args, **kwargs):
        id = self.kwargs.get('id')
        try:
            user = CustomUser.objects.get(id=id)
        except:
            return Response()
        
