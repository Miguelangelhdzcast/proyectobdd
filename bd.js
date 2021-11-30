const mongoose = require('mongoose')
const url = 'mongodb://localhost/proyecto_bd'

mongoose.connect(url,{

})

const db = mongoose.connection
db.on('error', console.error.bind(console,'Fallo en la conexion'))
db.once('open', function callback(){
    console.log("Conexion exitosa")
})

module.exports = db