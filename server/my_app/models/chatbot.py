from django.db import models
from .base import BaseModel
from .user import User

class Chatbot(BaseModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="chatbot")
    contents = models.JSONField(null=True,blank=True,default=dict)
    name = models.CharField(max_length=255,null=True,blank=True,default="My Bot")

    def __str__(self):
        return f"{self.user.fullname}'s Chatbot - {self.name}"
