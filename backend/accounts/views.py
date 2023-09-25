from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.tokens import RefreshToken

from .models import CustomUser
from .serializers import CustomUserSerializer

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import AllowAny
# Create your views here.


class UserCreationView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [AllowAny]
    def post(self, request):
        data = request.data.copy()
        email = data.get('email')
        try:
            user = CustomUser.objects.get(email=email)
            return Response(data='The user with this email is already registered.', status=status.HTTP_400_BAD_REQUEST)
        except CustomUser.DoesNotExist:
            serializer = CustomUserSerializer(data=data)
            if serializer.is_valid():
                user = serializer.save()
                
                refresh = RefreshToken.for_user(user)

                # Generate token and send it to the user
                token = {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }
                return Response(data=token, status=status.HTTP_201_CREATED)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
                

class UserLoginView(APIView):
    def post(self, request):
        data = request.data.copy()
        email = data.get('email')
        password = data.get('password')
        user = get_object_or_404(CustomUser, email=email)
        if user.check_password(password):
            refresh = RefreshToken.for_user(user)
            # Generate token and send it to the user
            token = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }
            return Response(token, status=status.HTTP_200_OK)
        
        return Response(data='invalid credentials', status=status.HTTP_401_UNAUTHORIZED)