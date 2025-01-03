from rest_framework.decorators import api_view,authentication_classes,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status,serializers
from my_app.models.user import User
from my_app.models.chatbot import Chatbot

from my_app.serializers.user_serializer import UserSerializer

from my_app.serializers.chatbot_serializer import ChatbotSerializer

from my_app.middlewares.clerk_auth import ClerkAuthentication

def validate_email( value):
   if User.objects.filter(email=value).exists():
      raise serializers.ValidationError("A user with this email already exists.")
   return value

@api_view(['POST'])
def reg_users(request):
 incoming_data = request.data
 modified_data = {
        "fullname": incoming_data.get("fullname", ""),
        "email": incoming_data.get("email", ""),
        "avatar": incoming_data.get("avatar"),  
    }
 validate_email(modified_data["email"])
 serializer=UserSerializer(data=modified_data)
 if serializer.is_valid():
   serializer.save()
   return Response(serializer.data,status=status.HTTP_201_CREATED)
 return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def reg_users(request):
 incoming_data = request.data
 modified_data = {
        "fullname": incoming_data.get("fullname", ""),
        "email": incoming_data.get("email", ""),
        "avatar": incoming_data.get("avatar"),  
    }
 validate_email(modified_data["email"])
 serializer=UserSerializer(data=modified_data)

 if serializer.is_valid():
   user=serializer.save()
   print(user.id)
   chatbotData={
    "user":user.id,
    "contents":{
       "files":[],
    },
    "name":modified_data["fullname"]
   }
   chatSerializer=ChatbotSerializer(data=chatbotData)
   if chatSerializer.is_valid():
      chatSerializer.save()
   else:
      return Response({'detail': chatSerializer.error_messages}, status=status.HTTP_400_BAD_REQUEST)
   
   return Response({"user":serializer.data,"chatbot":chatSerializer.data},status=status.HTTP_201_CREATED)
 return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login_users(request):
    email = request.data.get('email')
    if not email:
        return Response({'detail': 'Email is required.'}, status=status.HTTP_400_BAD_REQUEST)
    try:
        user = User.objects.get(email=email)
        chatbot=Chatbot.objects.get(user_id=user.id)
    except User.DoesNotExist:
        return Response({'detail': 'Invalid email.'}, status=status.HTTP_400_BAD_REQUEST)
    
    return Response({
        'user': {
            'id':user.id,
            'fullname': user.fullname,
            'email': user.email,
            'avatar': user.avatar if user.avatar else None,
        },
        'chatbot':{
           'id':chatbot.id,
           'contents':chatbot.contents,
           'name':chatbot.name
        }
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_users(request):
 users=User.objects.all()
 user = request.user
 token = request.auth 
 serializer=UserSerializer(users,many=True)
 return Response({"data":serializer.data})
