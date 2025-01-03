from django.urls import path
from .views import get_admin_users

urlpatterns=[
 path('admins/',get_admin_users,name='get_admins'),
]