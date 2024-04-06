from django.urls import path
from . import views  

urlpatterns = [
    path('nuevo', views.nuevo_usuario, name='nuevo_usuario'),
    path('buscar', views.buscar, name='buscar'),

    

]