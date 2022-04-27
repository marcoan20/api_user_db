# Oficina de construção de Api com node.js

## Instruções de como rodar o projeto
  1. Rode o comando ``npm i`` para instalar as dependências 
  2. Mude a url do mongoDB dentro do arquivo **server.js**
  3. Rode o comando ``npm run dev`` para iniciar a api

## Utilizando o thunder client para testar as rotas

  1. Vá em extensões do VSCode e instale o **ThunderClient**
  !["ThunderClient"](https://i.imgur.com/BehuQHz.png)
  2. Vá em **New Request**
  3. Para criar um usuário escolha post e na url coloque ```localhost:3000/user```, vá em body, escolha Json e preencha com dados conforme exemplo:
  ![Request exemple](https://i.imgur.com/Qp4W08s.png)
  você receberar uma resposta dessa forma:
  ![Response exemple](https://i.imgur.com/2hkXYMQ.png)
  4. Para listar os usuários utilize o metodo get, dessa forma: 
  ![Metodo Get](https://i.imgur.com/4w3nGFq.png)
  você vai receber um array com todos os usuários cadastrados.
  ![Usuários Cadastrados](https://i.imgur.com/qe86UkQ.png)