const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())

const {productosRouter} = require('./apis')

app.get('/', (req,res)=>{
    res.send('Servidor está vivo')
})

app.use('/cursos',productosRouter)

const PORT = process.env.PORT || 4001

app.listen(PORT, ()=>{
    console.log(`Servidor conectado en ${PORT}`)
})

