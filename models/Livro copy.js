//mongoose faz a intermediação entre o banco de dadoos e o servidor (node)

const mongoose = require('mongoose');


// embaixo seria o modelo(schema) dos dados(entidade) que tem que vir lá do mongodb

const livroSchema = new mongoose.Schema({
    _id: {type: String},
    title: {type: String, require: true},
    autor: {type: String, require: true},
    year: {type: Number, require: true},
    editor: {type: String, require: true},
    numPages: {type: Number, require: true},
    favorite: {type: Boolean, require: true}
});

const livros = mongoose.model('Livros', livroSchema);

module.exports = livros;