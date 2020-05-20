from django.contrib import admin
from django.urls import path, include
from quizz_app.views import index

urlpatterns = [
    path('api/', include('quizz_app.urls')),
    path('', index, name="index"),
]
