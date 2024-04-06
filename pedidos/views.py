from django.shortcuts import render

def nuevo_pedido(request):
    return render(request, 'nuevo_pedido.html')
