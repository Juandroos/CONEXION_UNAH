const { request, response } = require('express')
const { saveImg } = require('../helpers/subirImagenes')

const nuevaActividad = async (req = request, res = response) => {
    try {
        saveImg(req)
        res.send(req.body)
    } catch (error) {
        res.status(500).json({ msg: 'error' })
        console.log(error)
    }
}

module.exports = {
    nuevaActividad,
}
