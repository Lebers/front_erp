from django.shortcuts import render

def dashboard_test(request):
    return render(request, 'index.html')
