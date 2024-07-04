from django.urls import path


from .views import CaracteristicasAPIView,CaracteristicasDoCuidadorView, CuidadorAPIView, TutorAPIView,CuidadorFiltradoView




urlpatterns = [
    path('https://annacarolinneam.pythonanywhere.com/api/v1/cuidadores/', CuidadorAPIView.as_view(), name='cuidadores'),
    path('https://annacarolinneam.pythonanywhere.com/api/v1/caracteristicas/', CaracteristicasAPIView.as_view(), name='caracteristicas'),
    path('https://annacarolinneam.pythonanywhere.com/api/v1/tutores/',TutorAPIView.as_view(), name='tutores'),
    path('https://annacarolinneam.pythonanywhere.com/api/v1/cuidadores/<int:cuidador_id>/caracteristicas/',CaracteristicasDoCuidadorView.as_view(), name='caracteristicascuidador'),
    path('https://annacarolinneam.pythonanywhere.com/api/v1/cuidadores-filtrados/', CuidadorFiltradoView.as_view(), name='cuidadores-filtrados'),
]
