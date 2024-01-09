conteudo do video
https://www.youtube.com/watch?v=yZifRUvxdAk&list=PLQCmSnNFVYnQ28Gd7SmWiM-dChqaWiy8i



instalar dependencias
npm init

npm install express body-parser pg-promise jest axios
{
    express = requisições
    body-parser = tratamento de requisição junto com  express // não é mais necessario, o express ja trata tudo
    pg-promise = interagir com postgresql
    jest = para testes
    axios = testes de integração junto com jest
}

nodemon server
npm install nodemon
{
    não precisa ficar reiniciando o servidor
}


alterar em package.json{
"scripts": {
    "test": "jest --env node"
  },
}