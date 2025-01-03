# my_app/models/feedback.py
from django.db import models
from .base import BaseModel
from .user import User

class Feedback(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='feedback')
    institute = models.CharField(max_length=255)
    comment = models.TextField()

    def __str__(self):
        return f"Feedback from {self.user.fullname}"
