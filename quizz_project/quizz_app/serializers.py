from rest_framework import serializers
from quizz_app.models import quizzes, questions, results
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


class QuizzSerializer(serializers.ModelSerializer):
    class Meta:
        model = quizzes
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = questions
        fields = '__all__'

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = results
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = ('id', 'username', 'email')


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only':True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
