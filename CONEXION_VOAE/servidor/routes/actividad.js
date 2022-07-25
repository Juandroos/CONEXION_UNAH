const { Router } = require('express')
const {
    nuevaActividad,
    subirImagen,
    obtenerActividades,
    eliminarActividad,
    obtenerActividad,
    actualizarActividad

} = require('../controllers/actividadController')

const actividadRouter = Router()

actividadRouter.get('/obtener',obtenerActividades);
actividadRouter.get('/:id', obtenerActividad)
actividadRouter.put('/:id', actualizarActividad)
actividadRouter.post('/', nuevaActividad);
actividadRouter.post('/imagen', subirImagen);
actividadRouter.delete('/eliminar/:id',eliminarActividad);

module.exports = actividadRouter
