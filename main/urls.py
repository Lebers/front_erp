from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_session, name='login_session'),
    #path('home/', views.login_view, name='home'),
    path('menu/crea', views.menu_crea, name='menu-crea'),
    path('menu/asocia', views.menu_asocia, name='menu-asocia'),
    path('catalogo/crea', views.catalogo_crea, name='menu-asocia'),
    path('action/newuser/<str:username>/', views.new_user, name='new_user'),


]
