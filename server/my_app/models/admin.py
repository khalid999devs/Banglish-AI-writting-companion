from django.db import models

class Admin(models.Model):
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    date_joined= models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username