const livros = require('../models/Livro')

class LivroController {

    //o static permite que não precise instanciar a classe, pode usar direto tendo importado a classe. static é uma forma de declarar variável.
    static findAll = (req, res) => {
        livros.find((err, livro) => {
            res.status(200).json(livro)
        })

    }

    static findById = (req, res) =>{
        const id = req.params.id
        livros.findById(id, (err, livros)=>{
            if (err){
                res.status(404).send({message: 'Livro não encontrado', error: err.message})
            } else {
                res.status(200).json(livros)
            }
        })
    }

    static createBook = (req, res) =>{
        let livro = new livros(req.body)
        livro.save((err) => {
            if(err){
                // status HTTP é 500 pq algo não foi criado
                res.status(500).send({message: 'Erro ao salvar o livro', error: err.message})
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static deleteBook = (req, res) => {
        const id = req.params.id
        livros.findByIdAndDelete(id, (err, livro)=>{
            if(err){
                res.status(404).send({message: 'Livro não encontrado e não deletado', error: err.message})
            } else{
                res.status(200).send({message: 'O livro foi deletado!'});
            }
        })
    }

    static updateBook = (req, res) =>{
        const id = req.params.id
        livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(err){
                res.status(404).send({message: 'Não foi possível fazer update, recurso não encontrado', error: err.message})
            } else {
                res.status(200).send({message: "O livro foi atualizado!"})
            }
        })
    }
}

module.exports = LivroController;