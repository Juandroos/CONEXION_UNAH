//Rutas del usuario
const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')
const Usuario = require('../models/Usuario')

//api/usuario
router.post('/', usuarioController.crearUsuario)
router.get('/', usuarioController.obtenerUsuarios)
router.put('/:id', usuarioController.actualizarUsuarios)
router.get('/:id', usuarioController.obtenerUsuario)
router.delete('/:id', usuarioController.eliminarUsuarios)
router.post('/generar-pass', usuarioController.generarPassTemporal)
router.post('/cambiar-pass', usuarioController.cambiarPass)
router.post('/login',usuarioController.loginUsuario);

module.exports = router
