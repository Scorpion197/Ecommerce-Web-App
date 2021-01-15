from django.db import models

# Create your models here.
class Watch(models.Model):

    watch_name = models.CharField(max_length=50)
    watch_price = models.IntegerField(default=0)
    left_items = models.IntegerField(default=0)
    image = models.ImageField()

    