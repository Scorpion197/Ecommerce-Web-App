from django.shortcuts import render
from django.http import request, Http404, HttpResponse, HttpResponseRedirect
from .models import * 
from django.utils import timezone 
from django.core.mail import BadHeaderError, send_mail

# Create your views here.
def home_page(request):

    return render(request, "home.html")

    