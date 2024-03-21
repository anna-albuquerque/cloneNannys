from rest_framework import serializers

from .models import Cuidador, Caracteristicas, Tutor

class CaracteristicasSerializer(serializers.ModelSerializer):

    class Meta:
        model = Caracteristicas
        fields = (
            'id',
            'estudante_de_veterinaria',
            'medico_veterinario',
            'capacidade_adestramento',
            'aceita_multiplos_pets',
            'cuidador_comum',
            'pet_ate_5kg',
            'pet_5kg_a_10kg',
            'pet_10kg_a_20kg',
            'pet_20kg_a_40kg',
            'so_pet_castrado',
            'pet_nao_castrado',
            'pet_femea',
            'pet_macho',
            'medicacao_oral',
            'medicacao_injetavel'
        )


class CuidadorSerializer(serializers.ModelSerializer):

    caracteristicas = CaracteristicasSerializer(many=True)

    class Meta:
        model = Cuidador
        fields = (
            'id',
            'nome',
            'sobrenome',
            'data_nascimento',
            'cpf',
            'email',
            'telefone',
            'rua',
            'cep',
            'estado',
            'cidade',
            'numero',
            'instagram',
            'caracteristicas'
            
        )
class TutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutor
        fields = (
            'id',
            'nome',
            'sobrenome',
            'data_nascimento',
            'cpf',
            'email'
        )

