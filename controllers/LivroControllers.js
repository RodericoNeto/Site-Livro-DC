const livros = require('../models/Livro')

class LivroController {

    //o static permite que não precise instanciar a classe, pode usar direto tendo importado a classe. static é uma forma de declarar variável.
    static findAll = (req, res) => {

        livros.find((err, livros)=>{
            console.log(livros)
            res.status(200).json(livros)
        })
    }

    // static findById = (req, res) =>{
    //     const id = req.params.id
    //     livros.findById((err, livros)=>{
    //         res.status(200).json(livros)
    //     })
    // }
}

module.exports = LivroController;