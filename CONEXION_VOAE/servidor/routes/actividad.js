const { Router } = require('express')
const {
    nuevaActividad,
    subirImagen,
} = require('../controllers/actividadController')

const actividadRouter = Router()

actividadRouter.post('/', nuevaActividad)
actividadRouter.post('/imagen', subirImagen)

module.exports = actividadRouter
