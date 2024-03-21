from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,generics,filters



from .models import Cuidador, Caracteristicas, Tutor
from .serializers import TutorSerializer,CuidadorSerializer, CaracteristicasSerializer
# Create your views here.

class CuidadorFiltradoView(generics.ListAPIView):
    serializer_class = CuidadorSerializer
    queryset = Cuidador.objects.all()
    filter_backends = [filters.BaseFilterBackend]    
     # Use um backend de filtro personalizado se necessário

    def filter_queryset(self, queryset):
        filtros = {}

        # Adicione lógica de filtragem com base nos parâmetros de consulta
        for key, value in self.request.query_params.items():
            if value.lower() == 'true':
                filtros[f'caracteristicas__{key}'] = True

        if filtros:
            queryset = queryset.filter(**filtros)

        return queryset

class CuidadorAPIView(APIView):
    serializer_class = CuidadorSerializer     
    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   
     
    def get(self, request):
        cuidadores = Cuidador.objects.all()
        serializer = CuidadorSerializer(cuidadores, many=True)
        return Response(serializer.data)
    
class CaracteristicasAPIView(APIView):

    def get(self, request):
        caracteristicas = Caracteristicas.objects.all()
        serializer = CaracteristicasSerializer(caracteristicas, many=True)
        return Response(serializer.data)

class CaracteristicasDoCuidadorView(APIView):
    def get(self, request, cuidador_id):
        cuidador_caracteristicas = get_object_or_404(Caracteristicas, cuidador__id=cuidador_id)
        serializer = CaracteristicasSerializer(cuidador_caracteristicas)
        return Response(serializer.data)

class TutorAPIView(APIView):
    serializer_class = TutorSerializer

    def get(self, request):
     	tutores = Tutor.objects.all()
     	serializer = TutorSerializer(tutores, many=True)
     	return Response(serializer.data)
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

