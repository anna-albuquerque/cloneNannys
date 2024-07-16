# Use a imagem do Node.js 18 para a construção da aplicação
FROM node:18 AS build

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install --legacy-peer-deps

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

# Execute o build da aplicação Angular com logs detalhados
RUN npm run build

# Use uma imagem do Nginx para servir a aplicação
FROM nginx:alpine

# Copie os arquivos construídos para o diretório de publicação do Nginx
COPY --from=build /app/dist/nannys-angular /usr/share/nginx/html

# Exponha a porta 80 para acesso à aplicação
EXPOSE 80

# Inicie o Nginx
CMD ["nginx", "-g", "daemon off;"]
