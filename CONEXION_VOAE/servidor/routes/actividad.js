const { Router } = require('express')
const { nuevaActividad } = require('../controllers/actividadController')

const actividadRouter = Router()

actividadRouter.post('/', nuevaActividad)

module.exports = actividadRouter
