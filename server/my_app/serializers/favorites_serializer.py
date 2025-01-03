from rest_framework import serializers
from my_app.models.favorites import Favourites

class FavouritesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favourites
        fields = ['id', 'user', 'content','content_infos', 'created_at', 'updated_at']
