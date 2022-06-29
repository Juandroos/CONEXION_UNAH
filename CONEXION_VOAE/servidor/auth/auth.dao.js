const mongoose = require('mongoose');
const authSchema = require ('..models/Usuario');
const Usuario = require('../models/Usuario');

authSchema.statics = {
    create: function(data, cb){
        const usuario = new this(data);
        usuario.save(cb);
    },
    login: function(query, cb) {
        this.find(query, cb);
    }
}

module.exports = Usuario;