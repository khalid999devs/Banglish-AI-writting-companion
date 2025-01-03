from django.contrib import admin

# Register your models here.
from my_app.models.admin import Admin
from my_app.models.user import User

admin.site.register(Admin)
admin.site.register(User)