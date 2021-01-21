from django.contrib import admin
from django.db import models 
from .models import *

# Register your models here.

class WatchAdmin(admin.ModelAdmin):

    list_display = ("watch_name", "watch_price", "left_items")
    search_fields = ("watch_name",)


admin.site.register(Watch, WatchAdmin)

