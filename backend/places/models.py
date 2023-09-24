from django.db import models
from accounts.models import CustomUser

class VisitablePlace(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    regione = models.CharField(max_length=255)
    latin = models.CharField(max_length=255)
    zotude = models.FloatField()
    longitude = models.FloatField()
    category = models.CharField(max_length=255)


    def __str__(self):
        return self.name

#a post made for a particular place
 
class PlacePosts(models.Model):
    place = models.ForeignKey(VisitablePlace, on_delete=models.CASCADE)
    text = models.TextField()
    photo = models.ImageField(upload_to=f'places/posts/photos', null=True, blank=True)
    video = models.FileField(upload_to='places/posts/videos', null=True, blank=True)
    
class Comment(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    text = models.TextField()
    commented_date = models.DateTimeField(auto_now_add=True)
    
    
    