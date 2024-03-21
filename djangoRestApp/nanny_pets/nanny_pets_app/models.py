from django.db import models

# Create your models here.

class Pessoa(models.Model):
    nome = models.CharField(max_length=100)
    sobrenome = models.CharField(max_length=100)
    data_nascimento = models.DateField(null=True, blank=True)
    cpf = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    foto_perfil = models.ImageField(blank=True, null=True)

    class Meta:
        abstract = True

class Tutor(Pessoa):
    plataformaIndicação = models.CharField(max_length=100,blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Tutores'

    def __str__(self):
        return self.nome


class Cuidador(Pessoa):
    telefone = models.IntegerField()
    cep = models.CharField(max_length = 8,null = True)
    estado = models.CharField(max_length = 100, null = True)
    cidade = models.CharField(max_length = 100, null = True)
    numero = models.IntegerField(default = 0)
    rua = models.CharField(max_length = 100)
    instagram = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = 'Cuidadores'

    def __str__(self):
        return f'{self.nome} {self.sobrenome}'


class AvaliacaoTutor(models.Model):
    nota = models.IntegerField()
    comentario = models.TextField()
    data_hora = models.DateTimeField()

    tutor = models.ForeignKey(Tutor, on_delete=models.CASCADE, related_name='tutor')
    
    class Meta:
        verbose_name_plural = 'Avaliações do tutor'

class Caracteristicas(models.Model):
    estudante_de_veterinaria=models.BooleanField(default=False)
    medico_veterinario=models.BooleanField(default=False)
    capacidade_adestramento=models.BooleanField(default=False)
    aceita_multiplos_pets=models.BooleanField(default=False)
    cuidador_comum=models.BooleanField(default=False)
    pet_ate_5kg=models.BooleanField(default=False)
    pet_5kg_a_10kg=models.BooleanField(default=False)
    pet_10kg_a_20kg=models.BooleanField(default=False)
    pet_20kg_a_40kg=models.BooleanField(default=False)
    so_pet_castrado=models.BooleanField(default=False)
    pet_nao_castrado=models.BooleanField(default=False)
    pet_femea=models.BooleanField(default=False)
    pet_macho=models.BooleanField(default=False)
    medicacao_oral=models.BooleanField(default=False)
    medicacao_injetavel=models.BooleanField(default=False)

    cuidador = models.ForeignKey(Cuidador, on_delete=models.CASCADE, related_name='caracteristicas')

    class Meta:
        verbose_name_plural = 'Características'

    def __str__(self):
        return f'Características do cuidador: {self.cuidador.nome}'



class AvaliacaoCuidador(models.Model):
    nota=models.IntegerField()
    comentario=models.TextField()
    data_hora=models.DateTimeField()

    cuidador = models.ForeignKey(Cuidador, on_delete=models.CASCADE, related_name='avaliacaocuidador')

    class Meta:
        verbose_name_plural = 'Avaliações do cuidador'

class ImagensAmbiente(models.Model):
    fotos_local=models.ImageField()

    class Meta:
        verbose_name_plural = 'Imagens do ambiente'

    cuidador = models.ForeignKey(Cuidador, on_delete=models.CASCADE, related_name='imagensambiente')
