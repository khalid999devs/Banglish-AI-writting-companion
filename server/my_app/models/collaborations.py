from django.db import models
from .base import BaseModel
from .user import User

class Collaborations(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="collaborations")
    req_status = models.CharField(
        max_length=10, 
        choices=[('pending', 'Pending'), ('approved', 'Approved'), ('rejected', 'Rejected')],
        default='pending'
    )
    admin_comment = models.TextField(null=True, blank=True)
    data = models.JSONField(null=True, blank=True)

    def __str__(self):
        return f"{self.user.fullname} - {self.req_status}"
