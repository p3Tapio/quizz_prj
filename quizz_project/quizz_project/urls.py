from django.contrib import admin
from django.urls import path, include
from quizz_app.views import index
from quizz_app.api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/', include('quizz_app.urls')),
    path('', index, name="index"),
]
