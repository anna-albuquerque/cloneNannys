# Generated by Django 4.2.6 on 2023-10-10 23:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AvaliacaoTutor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nota', models.IntegerField()),
                ('comentario', models.TextField()),
                ('data_hora', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Cuidador',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('sobrenome', models.CharField(max_length=100)),
                ('data_nascimento', models.DateField()),
                ('cpf', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('foto_perfil', models.ImageField(upload_to='')),
                ('telefone', models.IntegerField()),
                ('endereco', models.CharField(max_length=100)),
                ('instagram', models.CharField(max_length=100)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Tutor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('sobrenome', models.CharField(max_length=100)),
                ('data_nascimento', models.DateField()),
                ('cpf', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('foto_perfil', models.ImageField(upload_to='')),
                ('teste', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
