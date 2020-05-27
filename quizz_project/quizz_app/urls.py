from rest_framework import routers
from .api import quizzViewSet, questionViewSet, resultViewSet

router = routers.DefaultRouter() 
router.register('quizzes', quizzViewSet, 'quizzes' )
router.register('questions', questionViewSet, 'questions' )
router.register('results', resultViewSet, 'results' )

urlpatterns = router.urls 
