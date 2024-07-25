from django.test import TestCase

class Tutor:
    def __init__(self, nome, sobrenome, data_nascimento, cpf, email, senha, telefone, foto_perfil):
        self.nome = nome
        self.sobrenome = sobrenome
        self.data_nascimento = data_nascimento
        self.cpf = cpf
        self.email = email
        self.senha = senha
        self.telefone = telefone
        self.foto_perfil = foto_perfil

    def validar_email(self):
        return "@" in self.email

    def validar_cpf(self):
        return len(self.cpf) == 14  # Formato: 123.000.000-00

def test_tutor():
    tutor = Tutor(
        "João",
        "Silva",
        "13/05/1991",
        "123.000.000-00",
        "joao.silva@example.com",
        "SenhaSegura123",
        "123456789",
        True
    )

    assert tutor.nome == "João"
    assert tutor.sobrenome == "Silva"
    assert tutor.data_nascimento == "13/05/1991"
    assert tutor.validar_cpf() == True
    assert tutor.validar_email() == True
    assert tutor.senha == "SenhaSegura123"
    assert tutor.telefone == "123456789"
    assert tutor.foto_perfil == True

if __name__ == "__main__":
    test_tutor()