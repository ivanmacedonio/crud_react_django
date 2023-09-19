from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import TaskView

router = routers.DefaultRouter()

router.register(r'tasks', TaskView, 'tasks')
#r'' registra el nombre de la url del router 




urlpatterns = [
    path('api/v1/', include(router.urls)),
]
