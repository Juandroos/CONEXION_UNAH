const { request, response } = require('express')
const { v2 } = require('cloudinary')
const cloudinary = v2
const Actividad = require('../models/Actividad')
var fs= require('fs');
const path=require('path');

// Configurando las credenciales de cloudanary
cloudinary.config({
    cloud_name: 'dwze7fq4u',
    api_key: '727758864851128',
    api_secret: 'FFe7eb8gy6uieFvE853ZxhQExts',
})

const nuevaActividad = async (req = request, res = response) => {
    try {
        const body = req.body
        const actividad = new Actividad(body)
        await actividad.save()
        res.send(actividad)
    } catch (error) {
        res.status(500).json({ msg: 'error al crear actividad' })
        console.log(error)
    }
}

// Controlador para subir imagenes
const subirImagen = async (req = request, res = response) => {
    try {
        const pathImg = req.file.path // Guardar los datos de la imagen
        const { url } = await cloudinary.uploader.upload(pathImg) // subir la imagen a cloudanary
        res.status(201).json(url) // retornando url de la imagen
    } catch (error) {
        res.status(500).json({ msg: 'No se pudo guardar la imagen' })
        console.log(error)
    }
}

const obtenerActividades = async (req, res) => {
    try {
        const actividad = await Actividad.find()
        res.json(actividad)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}


const eliminarActividad = async (req, res) => {
    try {
        let actividad = await Actividad.findById(req.params.id)

        if (!actividad) {
            res.status(404).json({ msg: 'No existe actividad' })
        }
        await Actividad.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Actividad Eliminada con exito.' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}



module.exports = {
    nuevaActividad,
    subirImagen,
    obtenerActividades,
    eliminarActividad,

}
