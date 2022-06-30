//Rutas del usuario
const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')
const usuario = require('../models/Usuario')

//api/usuario
router.post('/', usuarioController.crearUsuario)
router.get('/', usuarioController.obtenerUsuarios)
router.put('/:id', usuarioController.actualizarUsuarios)
router.get('/:id', usuarioController.obtenerUsuario)
router.post('/usuario-correo', usuarioController.obtenerUsuarioCorreo )
router.delete('/:id', usuarioController.eliminarUsuarios)
router.post('/generar-pass', usuarioController.generarPassTemporal)
router.post('/cambiar-pass', usuarioController.cambiarPass)


module.exports = router
