from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from my_app.models.admin import Admin
from my_app.serializers.admin_serializer import AdminSerializer

@api_view(['GET'])
def get_admin_users(request):
 users=Admin.objects.all()
 serializer=AdminSerializer(users,many=True)
 return Response(serializer.data)
