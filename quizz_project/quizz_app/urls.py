from rest_framework import routers
from .api import quizzViewSet, questionViewSet

router = routers.DefaultRouter() 
router.register('quizzes', quizzViewSet, 'quizzes' )
router.register('questions', questionViewSet, 'questions' )


urlpatterns = router.urls 
