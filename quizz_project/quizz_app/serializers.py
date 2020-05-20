from rest_framework import serializers 
from quizz_app.models import quizzes, questions 

class QuizzSerializer(serializers.ModelSerializer): 
    class Meta:
        model = quizzes
        fields = '__all__'
        
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = questions 
        fields = '__all__'