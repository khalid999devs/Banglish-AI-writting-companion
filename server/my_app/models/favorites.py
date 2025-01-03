from django.db import models
from .base import BaseModel
from .user import User
from .content import Content

class Favourites(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="favourites")
    content = models.ForeignKey(Content, on_delete=models.CASCADE, 
    related_name="favourited_by")
    content_infos=models.JSONField(null=True, blank=True)

    def __str__(self):
        return f"{self.user.fullname} -> {self.content.title}"
