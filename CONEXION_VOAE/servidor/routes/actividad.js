const { Router } = require('express')
const {
    nuevaActividad,
    subirImagen,
    obtenerActividades,
    eliminarActividad,
} = require('../controllers/actividadController')

const actividadRouter = Router()

actividadRouter.post('/', nuevaActividad);
actividadRouter.post('/imagen', subirImagen);
actividadRouter.get('/obtener',obtenerActividades);
actividadRouter.delete('/eliminar/:id',eliminarActividad);

module.exports = actividadRouter
