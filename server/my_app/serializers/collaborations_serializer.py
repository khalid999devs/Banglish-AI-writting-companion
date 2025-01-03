from rest_framework import serializers
from my_app.models.collaborations import Collaborations

class CollaborationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collaborations
        fields = ['id', 'user', 'req_status', 'admin_comment', 'data', 'created_at', 'updated_at']
