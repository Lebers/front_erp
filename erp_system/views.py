import requests
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.conf import settings

@login_required
def incio(request):
    return render(request, 'incio.html', {'api_url': settings.API_URL})