const express = require('express')
const AutorController = require('../controllers/AutorController')
const routes = express.Router()

routes
.get('/autores', AutorController.findAll)

module.exports = routes;