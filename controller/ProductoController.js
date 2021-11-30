const Producto = require('../model/Producto')  //requerimos al modelo 

//listar
module.exports.listar = (req, res)=>{
    Producto.find({},(error, productos)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al mostrar la lista de productos'
            })
        }
        return res.render('index',{productos: productos})
    })
}

//crear
module.exports.agregar = (req, res) => {
    const producto = new Producto ({
        nombre: req.body.nombre,
        precio: req.body.precio,
        estado: req.body.estado
    })
    producto.save(function(error,producto){
        if(error){
            return res.status(500).json({
                message: 'No se pudo agregar a la lista'
            })
        }
        res.redirect('/')
    })

}

//borrar
module.exports.borrar = (req, res) => {
    const id= req.params.id
    Producto.findByIdAndRemove(id, (error, producto)=>{
        if(error){
            return res.status(500).json({
                message: 'No se pudo borrar de la lista'
            })
        }
        res.redirect('/')
    })

    
}