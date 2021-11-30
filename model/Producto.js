const mongoose = require ('mongoose')
mongoose.Schema = mongoose.Schema          //mongo trabja con esquemas por eso se deben crear siempre

const productoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,                 //variables de la base de datos
    estado: String
}, {versionKey:false})  //para no crear una clave al crear un documento

module.exports = mongoose.model('productos', productoSchema)  //nombre de la coleccion de la base de datos que creamos y nombre del esquema


