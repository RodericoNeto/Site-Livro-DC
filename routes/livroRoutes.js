
//esse arquivo vai ter todas as rotas do arquivo
// CONFERIR AQUI COMO USAR: https://expressjs.com/pt-br/guide/routing.html 

// o express vai controlar as rotas do negocio
const express = require('express')
const LivroController = require('../controllers/LivroControllers')
const routes = express.Router()

routes
.get('/livros', LivroController.findAll)
.get('/livro/:id', LivroController.findById)
.post('/livro', LivroController.createBook)
.delete('/livro/:id', LivroController.deleteBook)
.put('/livro/:id', LivroController.updateBook)
//o ":id" é um PARAMETRO, que quando vem no link se chama QUERY parameter


module.exports = routes;