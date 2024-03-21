# Documento de Visão

## Histórico de Revisões

|    Data    | Versão |    Descrição    |                           Autores                            |
| :--------: | :----: | :-------------: | :----------------------------------------------------------: |
| 25/04/2023 |  1.0   | Versão inicial  |                       Walber Ranniere                        |
| 09/05/2023 |  1.1   | Versão revisada |                        Anna Carolinne                        |
| 30/05/2023 |  1.2   | Versão revisada |                        Anna Carolinne                        |
| 19/09/2023 |  2.0   |  Revisão Geral  |              Anna Carolinne, Renato Bernardino               |
| 03/10/2023 |  2.1   |  Revisão Geral  | Anna Carolinne, Renato Bernardino, Virginia Claudia, Gabriel Ricardo |


## 1. Objetivo do projeto

Nosso objetivo principal é aprimorar o sistema de hospedagem para cães e gatos "Nanny's Pets", reconhecendo a crescente demanda de proprietários que, eventualmente, precisam se ausentar e desejam encontrar hospedeiros qualificados para cuidar de seus animais de estimação em um ambiente seguro e adequado.   </br></br>

## 2. Descrição do problema

| **Problema** | O *problema* para encontrar pessoas capacitadas e com ambientes adequados para hospedagem de Pets tem *afetado* tutores que por algum motivo precisam ausentar-se de casa por um período mais longo. Isso tem *impactado* na qualidade de vida dos Pets e seus tutores, que, por horas, ficam preocupados com quem e onde podem deixar seus Pets. Uma *solução* seria a construção de uma aplicação que permitisse encontrar tutores, segundo um conjunto de características desejáveis pelos Pets e seus tutores. |
| :----------: | ------------------------------------------------------------ |
|  **Afeta**   | Todos aqueles que possuem um animal de estimação e em algum momento necessitam se afastar de sua residência. |
| **Impacta**  | Em evitar uma busca desorganizada por cuidadores de pets ou cancelamentos de compromissos motivados pela falta de opção de ter onde deixar seu animal de estimação. |
| **Solução**  | O Nanny's Pets - que junta de maneira eficiente aqueles que podem disponibilizar o serviço de hospedar um pet com aqueles que precisam dessa hospedagem. |

## 3. Descrição dos usuários 

|     Nome      |                          Descrição                           |                    Responsabilidade                    |
| :-----------: | :----------------------------------------------------------: | :----------------------------------------------------: |
| Administrador | Pessoa que trabalha para a plataforma. |   Responsável pelo gerenciamento e funcionamento correto da aplicação.   |  
|     Tutor     | Pessoa que deseja encontrar profissionais que possam cuidar do seu Pet por uma tempo. |   Cuida do seu Pet e procura por profissionais que prestam serviço de cuidador de Pet.    |
|   Cuidador    | Profissional que presta serviço de cuidar de pets. Pode ser pessoa física ou empresa. | Cuidar dos Pets segundo a necessidade dos mesmos. |
|   Visitante   |                Pessoa que acessa o site.                 |                  Nenhuma.               |


## 4. Descrição do ambiente dos usuários

* Número de pessoas envolvidas na execução da tarefa? Isso está mudando?  
  **Para que a tarefa seja executada são necessárias duas pessoas, uma que disponibiliza os serviços de hospedagem e a outra que precisa desse serviço.**  
* Quaisquer restrições ambientais exclusivas: móveis, externas etc?  
  **Não há restrições ambientais.** 
* Que plataformas de sistema são utilizadas hoje? Plataformas futuras?  
  **Sistema de de plataforma web. Futuramente será desenvolvido sistema mobile** 
* Que outros aplicativos estão em uso? É necessário que o seu aplicativo interaja com eles?  
  **Não há aplicativos similares.** 
  </br></br>

## 5. Principais necessidades dos usuários

Conseguir encontrar uma pessoa qualificada, de confiança, com um ambiente seguro e adequado as necessidades do animal e disponível para cuidar e hospedar com todo amor e carinho com que você cuidaria, quando precisar se ausentar e não tiver onde deixá-lo. </br></br>

## 6. Alternativas concorrentes

* **DogHero** o principal concorrente da plataforma, contando com serviços de hospedagem, creche, passeio, veterinário e pet sitter (um cuidador vai até a sua casa para ficar com o seu pet) https://www.doghero.com.br/ </br></br>

E a ambito regional, temos algumas opções como:    </br>

* **Prontocan: Hotel, Day Care e Clínica Veterinária** hotel para animais de estimação. R. Dr. Pedro Segundo de Araújo, 1801 - Capim Macio, Natal - RN, 59082-040 https://www.instagram.com/prontocan_/    </br>

* **Lar Dog Lar - Day Care e Hospedagem** hospedagem animal no bairro do Pitimbu - R. Serra do Tombador, 8098 - Pitimbú, Natal - RN, 59068-160 https://hotelzinhopetlardoglar.negocio.site/    </br>

## 7. Visão geral do produto

Uma plataforma que conecta pessoas com tempo, qualificação, um ambiente seguro, disposição, amor e carinho para acolher animais de estimação, com indivíduos em busca de cuidadores de confiança para garantir o bem-estar de seus amados animaizinhos nas horas de necessidade.  </br></br>

## 8. Requisitos funcionais

| Código |        Nome         |                          Descrição                           | Prioridade |
| :----: | :-----------------: | :----------------------------------------------------------: | :--------: |
|  RF01   |   Gerenciar dados de cuidador   |      O sistema permite o registro e gerenciamento de dados de usuários, isso inclui a coleta, armazenamento, atualização e exclusão de informações. No caso do cuidador temos as informações básicas do cadastro de usuário. Adicionada a essas informações, temos ainda o checklist com as características do cuidador, e as fotos do ambiente onde ele vai hospedar os pets.     | Essencial  |
|  RF02   | Gerenciar dados de tutor  |    O sistema permite o registro e gerenciamento de dados de usuários, isso inclui a coleta, armazenamento, atualização e exclusão de informações como nome, sobrenome, data de nascimento, cpf, e-mail e foto de perfil.  | Essencial  |
|  RF03   |    Encontrar cuidadores   |   Ao acessar a plataforma e entrar na parte de encontrar cuidador, o usuário vai escolher todas as características que ele procura em um cuidador, digitar seu endereço (para localizar cuidadores próximos) e então clicar em pesquisar para que a busca liste os cuidadores com aquelas caracterísicas que vão atender às suas necessidades.   | Essencial  |
|  RF04   |   Visualizar cuidadores mais requisitados e/ou melhor avaliados   | Os cuidadores cadastrados na plataforma recebem uma avaliação pelos tutores que já hospedaram com ele e o ranking dessas avaliações aparece na hora de mostrar o resultado das pesquisas dos cuidadores, mostrando primeiro os "melhores" avaliados. Assim como os cuidadores que tem o maior número de hospedagens solicidatas. Tornando esse um diferencial de realizar o processo de hospedagem pela plataforma.   | Essencial  |
|  RF05   |  Avaliar hospedagem de tutor  | Os cuidadores após hospedar um pet, também avaliam o seu tutor de maneira geral podendo levar em consideração vários aspectos como por exemplo: pontualidade para deixar e retirar o pet, se o pet estava bem cuidado, etc. Essa avaliação também ajuda aos cuidadores a saber se aquele tutor é ou não um bom cliente. | Desejável  |


## 9. Requisitos não-funcionais

| Código |        Nome         |                          Descrição                           |  Categoria  | Classificação |
| :----: | :-----------------: | :----------------------------------------------------------: | :---------: | :-----------: |
|  NF01  | Segurança dos Dados |        Manter os dados pessoais dos usuários privados        |  Segurança  |   Essencial   |
|  NF02  |   Responsividade    | O Sistema Web deve ser responsivo para o uso em diversos dispositivos | Usabilidade |   Desejável   |
|  NF03  |    Funcionamento    | O Sistema deve suportar o uso de vários usuários ao mesmo tempo com qualidade e velocidade | Usabilidade |    Desejável   |
