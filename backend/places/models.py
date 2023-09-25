from django.db import models
from accounts.models import CustomUser

class VisitablePlace(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    region = models.CharField(max_length=255)
    latitude = models.FloatField(max_length=255)
    longitude = models.FloatField()
    category = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name

#a post made for a particular place
 
class PlacePosts(models.Model):
    place = models.ForeignKey(VisitablePlace, on_delete=models.CASCADE)
    text = models.TextField()
    photo = models.ImageField(upload_to='places/posts/photos', null=True, blank=True)
    video = models.FileField(upload_to='places/posts/videos', null=True, blank=True)
    
class Comment(models.Model):
    place = models.ForeignKey(VisitablePlace, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    text = models.TextField()
    commented_date = models.DateTimeField(auto_now_add=True)
    
class Hotel(models.Model):
    name = models.CharField(max_length=100)
    latitude = models.FloatField()
    longtude =  models.FloatField()
    description = models.TextField()
    photo = models.ImageField(upload_to='hotels/images')

class SiteReccomendation(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
    region = models.CharField(max_length=100, null=True, blank=True)
    zone = models.CharField(max_length=100,null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    text_description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='suggestions/image', blank=True, null=True)
    
    #nullable feild
#
class DamageReport(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    region = models.CharField(max_length=100, null=True, blank=True)
    zone = models.CharField(max_length=100,null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    text_description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='suggestions/image', null=True, blank=True)
    
    
    
