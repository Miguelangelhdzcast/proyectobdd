const express = require ('express')
const router = express.Router()

const productoController = require('../controller/ProductoController')

router.get('/', productoController.listar)   //cuando acceda a la raiz llamara a esa clase para mostrar la base

router.post('/agregar', productoController.agregar) //agregar

router.get('/borrar/:id', productoController.borrar)



module.exports = router