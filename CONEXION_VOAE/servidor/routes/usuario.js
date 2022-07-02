'use strict'
//Rutas del usuario
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const usuario = require('../models/Usuario');
const auth = require('../auth/authenticate');


//api/usuario
router.post('/', usuarioController.crearUsuario);
router.get('/obtener-usuarios', auth.auth, usuarioController.obtenerUsuarios);
router.put('/:id', usuarioController.actualizarUsuarios);
router.get('/:id', usuarioController.obtenerUsuario);
router.post('/usuario-correo', usuarioController.obtenerUsuarioCorreo );
router.delete('/:id', usuarioController.eliminarUsuarios);
router.post('/generar-pass', usuarioController.generarPassTemporal);
router.post('/cambiar-pass', usuarioController.cambiarPass);
router.post('/login-usuario', usuarioController.login_usuario);

module.exports = router;
