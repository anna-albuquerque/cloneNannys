from django.contrib import admin

# Register your models here.

from .models import Pessoa, Cuidador, Tutor, AvaliacaoTutor,Caracteristicas,AvaliacaoCuidador,ImagensAmbiente

admin.site.register(Cuidador)
admin.site.register(Tutor)
admin.site.register(AvaliacaoTutor)
admin.site.register(Caracteristicas)
admin.site.register(AvaliacaoCuidador)
admin.site.register(ImagensAmbiente)