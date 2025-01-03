# my_app/serializers/user_serializer.py
from rest_framework import serializers
from my_app.models.user import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'fullname', 'email', 'avatar', 'created_at', 'updated_at']
