//Rutas del usuario
const express= require('express');
const router=express.Router();
const usuarioController = require('../controllers/usuarioController');

//api/usuario
router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.obtenerUsuarios);
router.put('/:id', usuarioController.actualizarUsuarios);
router.get('/:id', usuarioController.obtenerUsuario);
router.delete('/:id', usuarioController.eliminarUsuarios);

module.exports = router;