--------------------------------------
SEQUENCIA PARA CRIAR O PROJETO
--------------------------------------
Criar o arquivo package
npm init

//Gerencia as requisições, rotas e URLs, entre outra funcionalidades
npm install express

//Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte
npm install -D nodemon

//Rodar o projeto usando o nodemon 
nodemon index.js

//Instalar o MongoDB
npm install --save mongodb

//Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação.
npm install --save mongoose

--------------------------------------
COMO RODAR O PROJETO BAIXADO
--------------------------------------

//Instalar todas as dependencias indicada pelo package.json
npm install

//Rodar o projeto usando o nodemon 
nodemon index.js

-----------------------------------------------------------------------------------------------
app.use(express.json());

app.get('/', (req, res) => {
    return (res.json({ Title: "How to create an API" })); // Retornar um objeto de dados
});

------------------------------------------------------------------------------------------------

app.get('/', (req, res) => {
    res.send("Introduction to API "); // Imprimir uma frase.
});