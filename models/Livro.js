//mongoose faz a intermediação entre o banco de dadoos e o servidor (node)

const mongoose = require('mongoose');


// embaixo seria o modelo(schema) dos dados(entidade) que tem que vir lá do mongodb

const livroSchema = new mongoose.Schema({
    _id: {type: String},
    titulo: {type: String, require: true},
    autor: {type: String, require: true},
    editora: {type: String, require: true}
});

const livros = mongoose.model('livro', livroSchema);

module.exports = livros;