from django.db import models
from .base import BaseModel
from .user import User
from .content import Content 

class Likes(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="likes")
    content = models.ForeignKey(Content, on_delete=models.CASCADE, related_name="liked_by")

    def __str__(self):
        return f"Like by {self.user.fullname} on {self.content.title}"
