from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.


class GetPlaceView(APIView):
    def get(request):
        return Response({'data':'data'})
