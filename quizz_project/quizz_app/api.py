from quizz_app.models import quizzes, questions 
from rest_framework import viewsets, permissions
from .serializers import QuizzSerializer, QuestionSerializer
import django_filters.rest_framework

class quizzViewSet(viewsets.ModelViewSet):
    queryset = quizzes.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = QuizzSerializer

class questionViewSet(viewsets.ModelViewSet):
    queryset = questions.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = QuestionSerializer
    filterset_fields = ('__all__')