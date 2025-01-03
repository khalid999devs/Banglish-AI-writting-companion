# my_app/models/content.py
from django.db import models
from .base import BaseModel
from .user import User

class Content(BaseModel):
    title = models.CharField(max_length=255)
    caption = models.TextField()
    description = models.TextField()
    bangla_desc = models.TextField(blank=True, null=True)
    is_public = models.BooleanField(default=True)
    likes_num = models.IntegerField(default=0)
    pdf = models.FileField(upload_to='uploads/', blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='contents')

    def __str__(self):
        return self.title
