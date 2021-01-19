from django.shortcuts import render
from django.http import request, Http404, HttpResponse, HttpResponseRedirect
from .models import * 
from django.utils import timezone 
from django.core.mail import BadHeaderError, send_mail
from django.contrib.auth import authenticate, login, logout
 

# Create your views here.
def home_page(request):

    items = Watch.objects.all()[:3]
    context = {"items": items}

    return render(request, "home.html", context)

    
def view_single_item(request, item_id):

    """
    A function to view a single product when we click on it
    """

    try: 

        item = Watch.objects.get(id=item_id)
        context = {"item":item}

    except Watch.DoesNotExist:

        raise Http404

    return render(request, "singleitem.html", context)

