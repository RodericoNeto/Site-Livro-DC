const autores = require('../models/Autor')

class AutorController {

    //o static permite que não precise instanciar a classe, pode usar direto tendo importado a classe. static é uma forma de declarar variável.
    static findAll = (req, res) => {

        autores.find((err, autores)=>{
            //console.log(livros)
            res.status(200).json(autores)
        })
    }
}

module.exports = AutorController;