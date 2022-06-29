const Usuario = require('./auth.controller');
module.exports=(router) => {
    router.post('/login',Usuario.loginusuario);
} 