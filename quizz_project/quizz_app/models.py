from django.db import models
from django.conf import settings

class quizzes(models.Model):
    name = models.CharField(max_length=100, unique=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=False)
    description = models.CharField(max_length=500, blank=True)
    # public = models.BooleanField(default=False, null=False)
    timer_secs = models.IntegerField(default=60, null=False)
    created_at = models.DateTimeField(auto_now_add=True)

class questions(models.Model):
    quizz_id = models.ForeignKey(quizzes, on_delete=models.CASCADE)
    question = models.CharField(max_length=500, null=False)
    option_a = models.CharField(max_length=100, null=False)
    option_b = models.CharField(max_length=100, null=False)
    option_c = models.CharField(max_length=100, null=True)
    option_d = models.CharField(max_length=100, null=True)
    option_e = models.CharField(max_length=100, null=True)
    correct_option = models.CharField(max_length=1, null=False)

class results(models.Model):
    quizz_id = models.ForeignKey(quizzes, on_delete=models.CASCADE)
    player = models.CharField(max_length=100, null=True)
    score = models.IntegerField(default=0, null=True)