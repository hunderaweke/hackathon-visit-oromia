from django.contrib import admin
from .models import CustomUser, Visitor
# Register your models here.

admin.site.register(CustomUser)
admin.site.register(Visitor)
