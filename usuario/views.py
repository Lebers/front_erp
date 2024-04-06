from django.shortcuts import render

def nuevo_usuario(request):
    return render(request, 'nuevo.html')

def buscar(request):
    return render(request, 'buscar.html')
