from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import TaskView
from rest_framework_simplejwt import views as jwt_views
from .views import UserRegisterView
router = routers.DefaultRouter()

router.register(r"tasks", TaskView, "tasks")
# r'' registra el nombre de la url del router



urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("api/token/", jwt_views.TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", jwt_views.TokenRefreshView.as_view(), name="token_refresh"),
    path('api/register/', UserRegisterView.as_view(), name='register'),
]
