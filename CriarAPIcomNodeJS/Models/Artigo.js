const mongoose = require("mongoose");

const Artigo = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true, //Criar coluna de Criação e Edição automaticamente, atente-se para a chave.
});

mongoose.model("artigo", Artigo);