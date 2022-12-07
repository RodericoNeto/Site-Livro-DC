// mongoose conecta o banco de dados com o servidor(node)

const mongoose = require('mongoose')

//const url = 'mongodb+srv://dcfs01:dcfs01@cluster0.gplbvjr.mongodb.net/LivrosNovo'

const url = 'mongodb+srv://dcfs01:dcfs01@cluster0.gplbvjr.mongodb.net/node_mongo'

/* const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
 */
// mongoose.connect(url, connectionParams)
// .then(()=>{console.log('Conectou à DataBase!')})
// .catch((err)=>{console.log(`Erro ao conectar com a DataBase. n${err}`)})

mongoose.connect(url)

const db = mongoose.connection

 module.exports = db;