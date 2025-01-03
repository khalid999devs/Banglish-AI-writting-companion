from rest_framework import serializers
from my_app.models.admin import Admin

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ['id','password', 'username','date_joined']
