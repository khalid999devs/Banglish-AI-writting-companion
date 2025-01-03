from rest_framework import serializers
from my_app.models.chatbot import Chatbot

class ChatbotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chatbot
        fields = ['id', 'user', 'contents', 'name', 'created_at', 'updated_at']
