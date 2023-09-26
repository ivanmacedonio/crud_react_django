from rest_framework import viewsets, status, generics
from .serializers import TaskSerializer,UserSerializer
from .models import Task
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes
from django.contrib.auth.models import User

@permission_classes([IsAuthenticated])
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    def get_queryset(self):
        return Task.objects.filter(user = self.request.user)

class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
    