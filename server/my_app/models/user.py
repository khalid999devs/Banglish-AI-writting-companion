# my_app/models/user.py
from django.db import models
from .base import BaseModel

class User(BaseModel):
    fullname = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    avatar = models.URLField(blank=True, null=True)

    def __repr__(self):
        return f"User(id={self.id}, fullname={self.fullname}, email={self.email}, avatar={self.avatar})"
