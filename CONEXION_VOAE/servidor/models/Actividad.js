const { Schema, model } = require('mongoose')

const ActividadSchema = Schema({
    nombre: {
        type: String,
        required: true
    }
})

module.exports = model('Actividades', ActividadSchema)
