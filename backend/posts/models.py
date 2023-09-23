from django.db import models
from accounts.models import CustomUser
from places.models import VisitablePlace
# Create your models here.


class VisitorStory(models.Model):
    user  = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    place = models.ForeignKey(VisitablePlace, on_delete=models.CASCADE)
    caption = models.TextField(null=True, blank=True)
    date_posted = models.DateTimeField(auto_now_add=True)
    
class StoryImage(models.Model):
    image = models.ImageField(upload_to='stories/images')
    story = models.ForeignKey(VisitorStory, on_delete=models.CASCADE)
    
class StoryVideo(models.Model):
    video = models.FileField(upload_to='stories/videos')
    story = models.ForeignKey(VisitorStory, on_delete=models.CASCADE)
    