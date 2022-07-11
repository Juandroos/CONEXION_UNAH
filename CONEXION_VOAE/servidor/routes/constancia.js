const express = require ('express');
const router = express.Router();
const constanciaController = require('../controllers/constanciaController');

router.post('/', constanciaController.editarConstancia);
//router.get('/', constanciaController.obtenerConstancias); 
module.exports = router;