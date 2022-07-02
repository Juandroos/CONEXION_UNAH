'use strict'
var jwt = require('jwt-simple');
var moment= require('moment');
var secret = 'conexionUNAH';

exports.generarPass = (length) => {
    let resultado = ''
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        resultado += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
    }
    return resultado
}

exports.createToken = function(user){
    var payload={
        user: user._id,
        nombres: user.nombre,
        apellido: user.apellido,
        cuenta: user.cuenta,
        correo: user.correo,
        iat: moment().unix(),
        exp: moment().add(2, 'days').unix()
    }
    return jwt.encode(payload, secret);
}