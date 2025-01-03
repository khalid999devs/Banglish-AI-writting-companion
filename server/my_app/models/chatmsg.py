from django.db import models
from .base import BaseModel
from .chatbot import Chatbot
from .user import User

class ChatMsg(BaseModel):
    chatbot = models.ForeignKey(Chatbot, on_delete=models.CASCADE, related_name="messages")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="chat_messages")
    user_json = models.JSONField(null=True, blank=True)  
    message = models.JSONField()
    response = models.JSONField()

    def __str__(self):
        return f"Message for {self.chatbot.name} from {self.user.fullname}"
