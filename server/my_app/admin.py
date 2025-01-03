from django.contrib import admin

# Register your models here.
from my_app.models.admin import Admin
from my_app.models.user import User
from my_app.models.content import Content
from my_app.models.feedback import Feedback


admin.site.register(Admin)
admin.site.register(User)
admin.site.register(Content)
admin.site.register(Feedback)