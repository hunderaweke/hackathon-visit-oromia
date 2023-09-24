from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

class GetPostView(APIView):
    def get(request):
        return Response({'data':'test'})