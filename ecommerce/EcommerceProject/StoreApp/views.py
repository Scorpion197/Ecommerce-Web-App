from django.shortcuts import render
from django.http import request, Http404, HttpResponse, HttpResponseRedirect
from .models import * 
from django.utils import timezone 
from django.core.mail import BadHeaderError, send_mail
from django.contrib.auth import authenticate, login, logout
 

# Create your views here.
def home_page(request):

    return render(request, "home.html")

    
def view_single_item(request, item_id):

    pass 

