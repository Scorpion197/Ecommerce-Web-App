from django.db import models
from django.contrib.auth.models import User 

# Create your models here.
class Watch(models.Model):

    watch_name = models.CharField(max_length=50)
    watch_price = models.IntegerField(default=0)
    left_items = models.IntegerField(default=0)
    image = models.ImageField()

    
    def __str__(self):

        return self.watch_name


class Subscriber(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)

    subscribed = models.BooleanField(default=False)

    def __str__(self):

        return self.user.username