const mongoose = require('mongoose')

const url = 'mongodb+srv://dcfs01:dcfs01@cluster0.gplbvjr.mongodb.net/node_mongo.livro'

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(url, connectionParams)
.then(()=>{console.log('Conectou à DataBase!')})
.catch((err)=>{console.log(`Erro ao conectar com a DataBase. n${err}`)})