from quizz_app.models import quizzes, questions
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import QuizzSerializer, QuestionSerializer, UserSerializer, RegisterSerializer, LoginSerializer
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


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        _,token = AuthToken.objects.create(user) 
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        }) 


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _,token = AuthToken.objects.create(user) 
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        }) 

# GET USER API


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [ 
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
