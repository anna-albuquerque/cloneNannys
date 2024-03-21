# Nanny’s Pet - Documento de Arquitetura do Sistema

## Histórico da Revisão

| Data       | Versão | Descrição     | Autores                                                      |
| ---------- | ------ | ------------- | ------------------------------------------------------------ |
| 19/09/2023 | 2.0    | Revisão Geral | Anna Carolinne, Renato Bernardino                            |
| 03/10/2023 | 2.1    | Revisão Geral | Anna Carolinne, Renato Bernardino, Virginia Claudia, Gabriel Ricardo |
| 02/01/2024 | 2.2    | Revisão Geral | Anna Carolinne, Renato Bernardino, Virginia Claudia          |

## 1. Arquitetura

### 1.1 Introdução

Este documento apresenta uma visão arquitetural abrangente do sistema Nanny’s Pet, utilizando diversas visões para representar seus diferentes aspectos. O objetivo é capturar e comunicar as decisões arquiteturais significativas relacionadas ao sistema.

### 1.2 Termos e Abreviações

- **Tutor:** Dono do pet, responsável pelo animal hospedado.
- **Cuidador:** Indivíduo que hospeda temporariamente o animal.
- **Pet:** Animal de estimação do tutor.
- **Hospedagem:** Procedimento temporário de acolhimento do animal.
- **Residência:** Local onde o pet será hospedado pelo cuidador.

### 1.3 Requisitos Significantes

[Requisitos mais significativos orientando a arquitetura, obtidos através da metodologia do Mini-QAW.]

### 1.4 Restrições Arquiteturais

#### 1.4.1 Restrições Técnicas

- **RT1:**
- **RT2:**

#### 1.4.2 Restrições de Sistema Operacional

- **RT3:**
- **RT4:**

#### 1.4.3 Restrições de Hardware

- **RT5:**
- **RT6:**

### 1.5 Escopo do Sistema e Contexto

#### 1.5.1 Diagrama de Casos de Uso

 - Um usuário realiza seu cadastro na plataforma, como tutor ou como cuidador.
 - O tutor faz uma busca por um cuidador que preencha os requisitos desejados.


#### 1.5.2 Diagrama de Contexto

-	O tutor se cadastra na plataforma e busca por um cuidador que atenda suas necessidades.
-	O cuidador após se cadastrar na plataforma é quem será procurado pelo tutor, para hospedar pets sob condições pré acordadas.
-	 A plataforma conecta tutores e cuidadores.
- A plataforma acessa a api dos correios ViaCep para localizar o endereço cadastrado através do CEP.


#### 1.5.3 Diagrama de Containers

[Descrição da interação entre containers, atores e sistemas externos.]

### 1.6 Diagramas Conceituais

#### 1.6.1 Visão Lógica

[Inserir o diagrama de Classes de Domínio com conceitos e descrições.]

#### 1.6.2 Visão de Processo [Opcional]

[Motivação e inserção do(s) diagrama(s) de estado e/ou atividades, com descrição dos elementos.]

## 2. Detalhamento da Implementação e Ambiente Físico

### 2.1 Visão de Implementação

[Inserir o diagrama de componentes do CDU principal e dos CDUs detalhados, com lista de componentes e descrições.]

### 2.2 Diagramas de Componente – C4

### 2.3 Diagrama de Distribuição [Opcional]

[Inserir o diagrama de Implantação com breve descrição de cada nó.]

### 2.4 Persistência

[Descrição superficial da implementação da persistência, motivação, SGBD, tecnologia de implementação e módulos implementados que solicitam a persistência.]

### 2.5 Interface de Usuário

[Descrição superficial da implementação da interface, tecnologia e motivação.]

## 3. Anexos

### 3.1 API

Exemplo de documentação Swagger complementada:

- Agendamento:

  - Listar os agendamentos

    - Requisição GET para listar todos os agendamentos.

    **Parâmetros da Requisição:**

    - [Descrição dos parâmetros...]

    **Estrutura da Resposta:**

    - [Descrição da estrutura...]

    **Exemplo de Requisição:**

    ```
    rustCopy code
    GET 'http://edu.ifrn.cnat.clinica/api/agendamento'
    ```

    **Exemplo de Resposta:**

    ```
    jsonCopy code[
        {"id": 78, "data": "2021-02-17"},
        {"id": 79, "data": "2021-03-01"}
    ]
    ```

## 4. Referências

1. https://biking.michael-simons.eu/docs/index.html
2. https://hsc.aim42.org/documentation/hsc_arc42.html
3. https://resources.sei.cmu.edu/library/asset-view.cfm?assetID=513862
4. http://static.codingthearchitecture.com/documenting-software-architecture.pdf
