from django.urls import path
from .views import get_admin_users,get_users,reg_users,login_users,create_content,content_details,get_all_contents,like_content,ques_bot,get_bot_messages,get_AI_translations,search

urlpatterns=[
 path('admins/',get_admin_users,name='get_admins'),
 path('user/',get_users,name='get_users'),
 path('user/reg',reg_users,name='reg_users'),
 path('user/login',login_users,name='login_users'),

 path('content/create',create_content ,name='create-content'),
 path('content/<int:pk>',content_details ,name='content_details'),
 path('content/all',get_all_contents ,name='all_contents'),
 path('content/like',like_content ,name='like_content'),

 path('bot/ques',ques_bot ,name='ques_bot'),
 path('bot/msgs/<int:chatbot_id>',get_bot_messages ,name='bot_messages'),
 path('bot/translate',get_AI_translations,name="get_ai_translations"),

 path('search/',search ,name='search'),
]