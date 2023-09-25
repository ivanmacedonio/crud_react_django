from .models import Task
from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.hashers import make_password

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'description', 'done')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        user = User.objects.create(
            username = validated_data['username'],
            password = make_password(validated_data['password'])
        )
        user.save()
        return user
    

        