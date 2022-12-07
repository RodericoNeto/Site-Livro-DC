
//esse arquivo vai ter todas as rotas do arquivo


// o express vai controlar as rotas do negocio
const express = require('express')
const LivroController = require('../controllers/LivroControllers')
const routes = express.Router()

routes
.get('/books', LivroController.findAll)
// .get('/book/:id', LivroController.findById)


module.exports = routes;