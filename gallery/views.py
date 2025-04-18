from django.shortcuts import render
from .models import GalleryImage  # Import the gallery model

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def services(request):
    return render(request, 'service.html')

def testimonial(request):
    images = GalleryImage.objects.all().order_by('-uploaded_at')  # Fetch images
    return render(request, 'testimonial.html', {'images': images})

def project(request):
    return render(request, 'project.html')

def temp(request):
    return render(request, 'temp.html')

from django.shortcuts import render, redirect
from .models import GalleryImage
from django.contrib import messages

def upload_image(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        image = request.FILES.get('image')
        description = request.POST.get('description')
        
        if image:  # Basic validation
            GalleryImage.objects.create(
                title=title,
                image=image,
                description=description
            )
            messages.success(request, 'Image uploaded successfully!')
            return redirect('testimonial')  # Redirect to gallery page
        else:
            messages.error(request, 'Please select an image file.')
    
    return render(request, 'gallery/upload.html')

def testimonial(request):
    images = GalleryImage.objects.all().order_by('-uploaded_at')
    return render(request, 'testimonial.html', {'images': images})