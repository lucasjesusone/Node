// conexão com o BG MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'lucasone',
    password: '123456',
    database: 'lucas'
});

connection.connect(function(err) {
    if (err)
        console.error('error connecting: ' + err.stack);
    return;

});
// PARA INSERIR DENTRO DE UMA TABELA
/** 
connection.query("INSERT INTO ouremployees (name, age, email, admission) VALUES('Victor Castro', '18', 'Victorcastro10@outlook.com', '2020-04-24')", function(err, result) {
    if (!err) {
        console.log("Dados cadastrado com sucesso");
    } else {
        console.log("Erro ao cadastrar Dados");
    }
});*/

//PARA ALTERAR O ITEM DE UMA TABELA


connection.query("UPDATE ouremployees SET resignation = '102' WHERE id = 2", function(err, result) {
    if (!err) {
        console.log("Dados do funcionário alterado com sucesso!")
    } else {
        console.log("Erro ao alterar dados do funcionário!")
    }
})


connection.query("DELETE FROM ouremployees WHERE id = 1", function(err, result) {
    if (!err) {
        console.log("Funcionário deletado com sucesso!")
    } else {
        console.log("Erro ao alterar o funcionário!")
    }
})










// PARA ADICIONAR UMA COLUNA, VAI NO cmd mysql e usa ALTER TABLE suatabela ADD COLUMN nomedacoluna int/varchar(100)/date/double -- depende
// PARA REMOVER UMA COLUNA, VAI NO cmd mysql e usa ALTER TABLE suatabela DROP COLUM nomedacoluna int/varchar/double/date