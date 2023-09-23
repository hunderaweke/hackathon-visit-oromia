from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

class UserRegister(APIView):
    def get(request):
        return Response({'data':'test'})
    
class UserView(APIView):
    def get(request, *args, **kwargs):
        pass
