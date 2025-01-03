from rest_framework import serializers
from my_app.models.chatmsg import ChatMsg

class ChatMsgSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatMsg
        fields = ['id', 'chatbot', 'user', 'user_json', 'message', 'response', 'created_at', 'updated_at']
