from rest_framework.decorators import api_view,authentication_classes,permission_classes
from django.db.models import F
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status,serializers
from my_app.models.user import User
from my_app.models.chatbot import Chatbot
from my_app.models.content import Content
from my_app.models.likes import Likes
from my_app.models.chatmsg import ChatMsg

import os
import openai
from my_app.serializers.likes_serializer import LikesSerializer
from my_app.serializers.content_serializer import ContentSerializer
from my_app.serializers.chatbot_serializer import ChatbotSerializer
from my_app.serializers.chatmsg_serializer import ChatMsgSerializer
from my_app.serializers.user_serializer import UserSerializer

from my_app.middlewares.clerk_auth import ClerkAuthentication

from langchain.llms import Ollama
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

prompt = PromptTemplate(
    input_variables=["user_input"],
    template="You are an AI assistant. Translate the following text to Bangla (don't add any extra word, just translate and write in pure bangla): {user_input}"
)

prompt2 = PromptTemplate(
    input_variables=["user_input"],
    template="You are an AI assistant, who translate any English or Bangla(written in english languagee in pure Bangla language), Now, Translate the following text to Bangla (don't add any extra word, just translate and write in pure understandable bangla): {user_input}"
)

llm = Ollama(model="llama2")
chain = LLMChain(llm=llm, prompt=prompt)
chain2 = LLMChain(llm=llm, prompt=prompt2)

def get_openai_response(user_input):
 result = chain.run(user_input)
 return result

def generate_bangla_writings(user_input):
  result= chain2.run(user_input)
  return result

@api_view(['POST'])
@authentication_classes([ClerkAuthentication])
def ques_bot(request):
 incoming_data = request.data
 ai_resp=get_openai_response(incoming_data["message"]['text'])

 final_data={**incoming_data,"response":{"text":ai_resp}}

 serializer=ChatMsgSerializer(data=final_data)
 if serializer.is_valid():
   serializer.save()
   return Response({"result":serializer.data,"msg":"Successfully created the chat content!"},status=status.HTTP_201_CREATED)
 return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@authentication_classes([ClerkAuthentication])
def get_AI_translations(request):
 respBody=request.data
 text=respBody["text"]
 aiResponse=generate_bangla_writings(text)
 return Response({"response":aiResponse,"msg":"Successfully translated Contents."})

@api_view(['GET'])
@authentication_classes([ClerkAuthentication])
def get_bot_messages(request, chatbot_id):
    try:
        chatbot = Chatbot.objects.get(id=chatbot_id)
        msgs = ChatMsg.objects.filter(chatbot=chatbot)

        serializer = ChatMsgSerializer(msgs, many=True)
        
    except Chatbot.DoesNotExist:
        return Response({"msg": "Chatbot not found!"}, status=status.HTTP_404_NOT_FOUND)
    
    return Response({"result": serializer.data, "msg": "Successfully fetched the chat msgs!"}, status=status.HTTP_200_OK)


@api_view(['POST'])
@authentication_classes([ClerkAuthentication])
def create_content(request):
 incoming_data = request.data
 serializer=ContentSerializer(data=incoming_data)
 if serializer.is_valid():
   serializer.save()
   return Response({"result":serializer.data,"msg":"Successfully created the content!"},status=status.HTTP_201_CREATED)
 return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
@authentication_classes([ClerkAuthentication])
def content_details(request,pk):
 try:
  content=Content.objects.get(pk=pk)
 except Content.DoesNotExist:
  return Response(status=status.HTTP_404_NOT_FOUND)
 
 if request.method=='GET':
  serializer=ContentSerializer(content)
  return Response(serializer.data)
 
 elif request.method=='PUT':
  serializer=ContentSerializer(content,data=request.data)
  if serializer.is_valid():
   serializer.save()
   return Response({"result":serializer.data,"msg":"Successfully edited the content"})
  return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
 
 elif request.method=='DELETE':
  content.delete()
  return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
@authentication_classes([ClerkAuthentication])
def get_all_contents(request):
 contents=Content.objects.filter(is_public=True)
 serializer=ContentSerializer(contents,many=True)
 return Response({"data":serializer.data,"msg":"Successfully fetched contents."})


@api_view(['POST'])
@authentication_classes([ClerkAuthentication])
def like_content(request):
 like_data=request.data
 content = Content.objects.get(id=like_data["content"])
 content.likes_num += 1
 content.save()

 serializer=LikesSerializer(data=like_data)
 if serializer.is_valid():
   serializer.save()
   return Response({"result":serializer.data,"msg":"Successfully done_liking!"},status=status.HTTP_201_CREATED)
 return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@authentication_classes([ClerkAuthentication])
def search(request):
    try:
        search_data = request.data
        keyword = search_data.get('keyword', '').strip()
        
        if not keyword:
            return Response(
                {"error": "Keyword is required for search."},
                status=status.HTTP_400_BAD_REQUEST
            )

        contents = Content.objects.filter(title__icontains=keyword, is_public=True)
        content_serializer = ContentSerializer(contents, many=True)

        users = User.objects.filter(fullname__icontains=keyword)
        user_serializer = UserSerializer(users, many=True)

        return Response(
            {
                "contents": content_serializer.data,
                "users": user_serializer.data,
                "msg": "Search successful."
            },
            status=status.HTTP_200_OK
        )
    except Exception as e:
        return Response(
            {"error": str(e), "msg": "An error occurred while searching."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )




