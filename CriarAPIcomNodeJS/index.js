const express = require("express")
const mongoose = require("mongoose")

require("./Models/Artigo");
const Artigo = mongoose.model("artigo");

const app = express();

app.use(express.json());


mongoose.connect('mongodb://localhost/lucas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function() {
    console.log("Conexão com mongoDB realizada com sucesso.");
}).catch(function(error) {
    console.log("Conexão com mongoDB não foi realizada com sucesso, Erro: " + error);
});

app.get('/', (req, res) => {
    return res.json({ Title: "How to create an API" }); // Retornar um objeto de dados
});

app.post("/artigo", function(req, res) {
    const artigo = Artigo.create(req.body, (error) => {
        if (error) return res.status(400).json({
            error: true,
            message: "Error: Artigo não foi cadastrado com sucesso!"
        })

        return res.status(200).json({
            error: false,
            message: "Artigo cadastrado com sucesso!"
        })
    })
});


app.listen(8080, function() {
    console.log("Servidor Iniciado com Sucesso: Porta 8080")
});