const express = require('express');
const app = express ()
 
//exportar la clase
const db = require('./bd')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const productos = require('./routes/Productos')
app.use(productos)


app.get('/', (req, res)=>{
    res.send('funcionando')

})
//servidor local nosotrso elegimos el puerto
app.listen(4000, ()=>{
   console.log('!Server up! en http://localhost:4000')

})