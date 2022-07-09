const { request, response } = require('express')
const { saveImg } = require('../helpers/subirImagenes')
const { v2 } = require('cloudinary')
const Actividad = require('../models/Actividad')
const cloudinary = v2

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

const subirImagen = async (req = request, res = response) => {
    try {
        const pathImg = req.file.path
        const { url } = await cloudinary.uploader.upload(pathImg)
        res.status(201).json(url)
    } catch (error) {
        res.status(500).json({ msg: 'No se pudo guardar la imagen' })
        console.log(error)
    }
}

module.exports = {
    nuevaActividad,
    subirImagen,
}
