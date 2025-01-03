from django.db import models

class User(models.Model):
    fullname = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    date_joined= models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username