const autores = require('../models/Autor')

class AutorController {

    //o static permite que não precise instanciar a classe, pode usar direto tendo importado a classe. static é uma forma de declarar variável.
    static findAll = (req, res) => {

        autores.find((err, autores)=>{
            //console.log(autores)
            res.status(200).json(autores)
        })
    }


    static findById = (req, res) =>{
        const id = req.params.id
        autores.findById(id, (err, autores)=>{
            if (err){
                res.status(404).send({message: 'Autor não encontrado', error: err.message})
            } else {
                res.status(200).json(autores)
            }
        })
    }

    static createAutor = (req,res)=>{
        let autor = new autores(req.body)
        autor.save((err)=>{
            if(err){
                res.status(500).send({message: 'Erro ao salvar o autor', error: err.message})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static deleteAutor = (req, res) => {
        const id = req.params.id
        autores.findByIdAndDelete(id, (err, autor)=>{
            if(err){
                res.status(404).send({message: 'autor não encontrado e não deletado', error: err.message})
            } else{
                res.status(200).send({message: 'O autor foi deletado!'});
            }
        })
    }

    static updateAutor = (req, res) =>{
        const id = req.params.id
        autores.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(err){
                res.status(404).send({message: 'Não foi possível fazer update, recurso não encontrado', error: err.message})
            } else {
                res.status(200).send({message: "O autor foi atualizado!"})
            }
        })
    }
}

module.exports = AutorController;