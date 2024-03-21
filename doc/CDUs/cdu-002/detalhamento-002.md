# **Projeto “Nanny's Pets”**
## **Especificação de Caso de Uso**   
### **Cadastrar Cuidador**   

**Histórico da Revisão**
| **Data** | **Versão** | **Descrição** | **Autor** |
| --- | --- | --- | --- |
| 09/05/2023 | 1.0 | Cadastrar Cuidador | Renato Bernardino|

</br>

### **1 Resumo**
O usuário que deseja utilizar o site seja para hospedar seu pet, ou, para se tornar um possível hospedante de pets, precisa realizar o cadastro no sistema do site “Nanny's Pets”. </br></br>

### **2 Atores**
2.1 Cuidador </br></br>

### **3 Precondições**     
Não há precondições  </br></br>  

### **4 Pós-condições**    
O cuidador está cadastrado na plataforma.</br></br>

### **5 Fluxos de evento**

#### **5.1 Fluxo básico**
| **Ações do ator** | **Ações do sistema** | 
| --- | --- |
| 1. Usuário acessa a home Nannys-Pets | Sistema exibe a tela home   | 
| 2. Usuário seleciona o botão cadastrar  | Sistema exibe um modal com duas opções: Cadastrar Tutor e Cadastrar Cuidador | 
| 3. Usuário seleciona a opção cadastrar Cuidador | Sistema exibe a primeira tela de cadasrto   | 
| 4. Usuário preenche as informações de cadastro e seleciona o botão próxima etapa  | Sistema exibe a tela de seleção de foto de perfil | 
| 5. Usuário seleciona a foto de perfil e seleciona o botão próxima etapa | Sistema exibe tela de adicionar fotos do ambiente do cuidador  | 
| 6. Usuário seleciona as fotos do ambiente e seleciona o botão próxima etapa  | Sistema exibe tela de cadastro de informações de contato |
| 7. Usuário preenche as informações e seleciona o botão próxima etapa| Sistema exibe tela de seleção de características do cuidador|
| 8. Usuário seleciona suas características e seleciona o botão finalizar cadastro| Sistema envia as informações de cadastro para a API | 
</br>

#### **5.2 Fluxo alternativo**
| **Ações do ator** | **Ações do sistema** | 
| --- | --- |
| 1. Usuário acessa a home Nannys-Pets | Sistema exibe a tela home   |
| 2. Usuário seleciona o botão login no menu| Sistema exibe a tela de login | 
| 3. Usuário seleciona a opção: Ainda não sou cadastrado  | Sistema exibe um modal com duas opções: Cadastrar Tutor e Cadastrar Cuidador | 
| 4. Usuário seleciona a opção cadastrar Cuidador | Sistema exibe a primeira tela de cadasrto   | 
| 5. Usuário preenche as informações de cadastro e seleciona o botão próxima etapa  | Sistema exibe a tela de seleção de foto de perfil | 
| 6. Usuário seleciona a foto de perfil e seleciona o botão próxima etapa | Sistema exibe tela de adicionar fotos do ambiente do cuidador  | 
| 7. Usuário seleciona as fotos do ambiente e seleciona o botão próxima etapa  | Sistema exibe tela de cadastro de informações de contato |
| 8. Usuário preenche as informações e seleciona o botão próxima etapa| Sistema exibe tela de seleção de características do cuidador|
| 9. Usuário seleciona suas características e seleciona o botão finalizar cadastro| Sistema envia as informações de cadastro para a API | 

---------------------
