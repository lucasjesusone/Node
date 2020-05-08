const Sequelize = require('sequelize');

const sequelize = new Sequelize('lucas', 'lucasone', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function() {
    console.log("Conexão realizada com sucesso.")
}).catch(function(error) {
    console.log("Erro ao realizar a conexão: " + error)
});

const Pagamento = sequelize.define('pagamentos', {

    nome: {
        type: Sequelize.STRING,

    },
    valor: {
        type: Sequelize.DOUBLE

    }
});

//Pagamento.sync({ force: true });

Pagamento.create({
    nome: "Casa",
    valor: 1000
})