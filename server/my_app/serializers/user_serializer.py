from rest_framework import serializers
from my_app.models.user import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','fullname','password', 'username', 'email', 'date_joined']
