const express = require('express')
const AutorController = require('../controllers/AutorController')
const routes = express.Router()

routes
.get('/autores', AutorController.findAll)
.get('/autor/:id', AutorController.findById)
.post('/autor', AutorController.createAutor)
.delete('/autor/:id', AutorController.deleteAutor)
.put('/autor/:id', AutorController.updateAutor)

module.exports = routes;