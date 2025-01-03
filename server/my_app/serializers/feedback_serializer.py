# my_app/serializers/feedback_serializer.py
from rest_framework import serializers
from my_app.models.feedback import Feedback

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ['id', 'user', 'institute', 'comment', 'created_at', 'updated_at']
