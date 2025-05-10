# Meu Projeto

Este é o backend de uma aplicação de rede social, desenvolvido com foco em aprendizado e organização do código. O projeto foi construído com JavaScript (Node.js), utilizando o Express.js e estruturado com a arquitetura MVC (Model-View-Controller).

## Tecnologias usadas

-  Node.js
-  Express
-  MongoDB com Mongoose para modelagem de dados
-  Postman para testes de rotas e requisições

## Funcionalidades implementadas:

-  Cadastro de usuários (registro) e login com autenticação
-  Criação, edição e exclusão de posts
-  Curtidas em posts
-  Comentários em posts

## Como rodar o projeto

1. Clone este repositório:
   ```bash
    git clone https://github.com/leandroalves-dev/rede-social-backend.git

2. Instale as dependências:
   ```bash
   npm install

## Configure o arquivo .env

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

-   MONGO_URI=sua_string_de_conexão_com_mongodb
-   JWT_SECRET=sua_chave_secreta  

3. Rode o projeto
    ```bash
    npm run server
