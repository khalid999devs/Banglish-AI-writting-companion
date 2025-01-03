from rest_framework import serializers
from my_app.models.likes import Likes

class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = ['id', 'user', 'content', 'created_at', 'updated_at']
