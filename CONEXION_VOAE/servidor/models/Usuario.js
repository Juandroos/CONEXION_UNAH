const mongoose = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    dni: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    nacimiento: {
        type: Date,
        required: true,
    },
    facultad: {
        type: String,
        required: true,
    },
    carrera: {
        type: String,
        required: true,
    },
    cuenta: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now(),
    },
    tempPassword: {
        type: String,
    },
    cambiarPassword: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('Usuario', UsuarioSchema)
