
//express controla as rotas
const { json } = require('express')
const express = require('express')
const app = express()
const port = 5000
const routes = require('./routes/index')
routes(app)

const db = require('./Config/db')
// const livros = require('./models/Livro')

db.on('error', console.log.bind(console, 'Erro ao conectar com o banco!'))
db.once('open', ()=>{
    console.log('Conexão realizada com Sucesso!')
})


app.get('/', (req,res)=>{
    res.send('Servidor subiuuu')
})

// app.get('/livros', (req,res)=>{
//     livros.find((error, livros)=>{
//         if(error) res.status(400);

//         res.status(200).json(livros)
//     })
// })

app.listen(port, ()=>{
    console.log(`Funcionando na port ${port}`)
})