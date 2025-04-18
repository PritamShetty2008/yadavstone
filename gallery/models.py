from django.db import models
from django.utils import timezone

class GalleryImage(models.Model):
    title = models.CharField(max_length=100, blank=True)
    image = models.ImageField(upload_to='gallery/')
    description = models.TextField()
    uploaded_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title or f"Image {self.id}"
