from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.tokens import RefreshToken

from .models import CustomUser, Visitor
from .serializers import CustomUserSerializer, VisitorSerializer
from rest_framework import generics
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import AllowAny
# Create your views here.
from rest_framework.parsers import MultiPartParser, FormParser, FileUploadParser


class GetUserView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    pagination_class = LimitOffsetPagination

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
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [AllowAny]
    def post(self, request):
        data = request.data.copy()
        email = data.get('email')
        password = data.get('password')
        user = get_object_or_404(CustomUser, email=email)
        if user.check_password(password):
            refresh = RefreshToken.for_user(user)
            # Generate token and send it to the user
            serializer  = CustomUserSerializer(instance=user)
            token = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user_data':serializer.data
            }
            return Response(token, status=status.HTTP_200_OK)
        
        return Response(data='invalid login credentials', status=status.HTTP_404_NOT_FOUND)


class VisitorProfileView(TokenObtainPairView,APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser, FileUploadParser]

    def get(self, request):
        user = request.user
        profile = Visitor.objects.get(user_id=user.id)
        
        serializer = VisitorSerializer(profile, context={'request': request})
        userializer = CustomUserSerializer(user)
        data = {}
        data['profile'] = serializer.data
        data['profile']['password'] = ''
        data['user'] = userializer.data
        return Response(data)

    def post(self, request):
        user = request.user
        data = request.data.copy()
        serializer = VisitorSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save(user=user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors})