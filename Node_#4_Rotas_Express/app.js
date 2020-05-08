const express = require("express");

const app = express();

// conexão com o BG MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'lucasone',
    password: '123456',
    database: 'lucas'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM user', function(err, rows, fields) {
    if (!err) {
        console.log('Resultado: ', rows);
    } else {
        console.log('Erro ao realizar a consulta')
    }
})


//---------------------------------------ADICIONAR HTML NA PAGINA PELO NODE.JS---------------------------------------------//
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/src/index.html"); // "/" por ser pagina raiz
})

app.get("/contato", function(req, res) {
    res.send("Contatos");
})

app.get("/sobre-empresa", function(req, res) {
    res.send("Sobre nossa Empresa");
})

app.listen(8080)

/// Instalção do nodemon nessa unidade.

// LEMBRANDO SEMPRE DE EXECUTAR O CMD, COLOCA CD / E COLA A PASTA ONDE ESTÁ OS ARQUIVOS COLOCANDO CD NA FRENTE,
//DPS EXECUTA O NODEMON.

// Para carregar arquivos HTML  => res.sendFile(__dirname + "arquivo.html")