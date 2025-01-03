# my_app/serializers/content_serializer.py
from rest_framework import serializers
from my_app.models.content import Content

class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['id', 'title', 'caption', 'description', 'bangla_desc', 'is_public', 'likes_num', 'pdf', 'user', 'created_at', 'updated_at']
