const express = require('express')
const router = express.Router()

const infoCursos = require('./cursos')
const programacion = infoCursos.programacion

router.get('/', (req,res)=>{
    res.json(programacion)
})

router.get('/:lenguaje', (req,res)=>{
    const lenguaje = req.params.lenguaje
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    }

    res.json(resultados)
})

router.post('/', (req,res)=>{
    const nuevoElemento = req.body
    console.log(nuevoElemento)
    programacion.push(nuevoElemento)
    res.send(JSON.stringify(programacion))
})

router.put('/:id', (req,res)=>{
    const cursoActualizado = req.body
    const id = req.params.id

    const indice = programacion.findIndex(curso => curso.id == id)

    if (indice >= 0){
        programacion[indice] = cursoActualizado;
    }

    res.json(programacion)
})

router.delete('/:id', (req,res)=>{
    const id = req.params.id
    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0){
        programacion.splice(indice, 1);
    }
    res.json(programacion)
})

module.exports = router
