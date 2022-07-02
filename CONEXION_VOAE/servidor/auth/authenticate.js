'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret= 'conexionUNAH';

exports.auth= function(req, res, next){
    //Si no enviamos la variable de authorizaion por el header entonces..
    if(!req.headers.authorization){
        return res.status(403).send({
            message: 'No hay Header'
        });
    }

    //Vamos a validar que el token no haya expirado
    var token= req.headers.authorization.replace(/['"]+/g,'');
    var segment = token.split('.');
    if(segment.length!=3){
        res.status(403).send({
            message: 'Token No Válido'
        });
    }else{
        try{
            var payload = jwt.decode(token, secret);
        if(payload.exp <= moment().unix()){
            res.status(403).send({
                message: 'El token Expiró'
            });
        }
    }catch(error){
        res.status(403).send({
            message: 'Ha ocurrido un error interno.'
        });
    }
        }
        req.user=payload;
        next();
}