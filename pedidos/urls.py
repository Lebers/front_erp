from django.urls import path
from . import views  

urlpatterns = [
    path('new', views.nuevo_pedido, name='nuevo_pedido'),
 
    

]