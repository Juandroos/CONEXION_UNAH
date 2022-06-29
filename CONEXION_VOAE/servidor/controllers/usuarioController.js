const { json, request, response } = require('express')
const Usuario = require('../models/Usuario')
const emailer = require('../config/emailer')
const { generarPass } = require('../helpers/generarPassword')
const { enviarEmail } = require('../helpers/sendEmail')


exports.crearUsuario = (req, res) => {
    try {
        let usuario

        //Creamos nuestro usuario
        usuario = new Usuario(req.body)

        usuario.save() //elimine await
        res.send(usuario)
        emailer.sendMail(usuario)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
        const expiresIn = 24*60*60;
        const accessToken = jwt.sign({id: usuario.id},
            SECRET_KEY,{
                expiresIn: expiresIn
            });
            //response
            res.send({ Usuario })
    };
}

exports.loginUsuario = (req,res) => {
    const usuarioData = {
        correo: req.body.correo,
        password: req.body.password
    }
    Usuario.findOne({correo: usuarioData.correo},(err,usuario)=>{
      if (err) return res.status(500).send('Server error')

      //Email no existe
      if (!usuario){
        res.status(409).send({message: 'Hay un error'})
      }  else{
        const resultpassword = usuarioData.password;
        if (resultpassword){
            const expiresIn= 24 *60 * 60;
            const accessToken= jwt.sign({id: usuario.id}, SECRET_KEY,{expiresIn: expiresIn});
            res.send({usuarioData});
        } else {
            //contraseña equivocada
            res.status(409).send({message: 'Hay un error'})
        }
      }
    })
}

exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find()
        res.json(usuarios)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.actualizarUsuarios = async (req, res) => {
    try {
        const {
            dni,
            nombre,
            apellido,
            telefono,
            nacimiento,
            facultad,
            carrera,
            cuenta,
            rol,
            correo,
            password,
        } = req.body
        let usuario = await Usuario.findById(req.params.id)

        if (!usuario) {
            res.status(404).json({ msg: 'N existe un usuario' })
        }

        usuario.dni = dni
        usuario.nombre = nombre
        usuario.apellido = apellido
        usuario.telefono = telefono
        usuario.nacimiento = nacimiento
        usuario.facultad = facultad
        usuario.carrera = carrera
        usuario.cuenta = cuenta
        usuario.rol = rol
        usuario.correo = correo
        usuario.password = password

        /*         usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new:true },  (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
        
            console.log(doc);
        }); */
        usuario = await Usuario.findOneAndUpdate(
            { _id: req.params.id },
            usuario,
            { new: true }
        )
        res.json(usuario)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerUsuario = async (req, res) => {
    try {
        let usuario = await Usuario.findById(req.params.id)

        if (!usuario) {
            res.status(404).json({ msg: 'N existe un usuario' })
        }
        res.json(usuario)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarUsuarios = async (req, res) => {
    try {
        let usuario = await Usuario.findById(req.params.id)

        if (!usuario) {
            res.status(404).json({ msg: 'N existe un usuario' })
        }
        await Usuario.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Usuario Eliminado con exito.' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.generarPassTemporal = async (req = request, res = response) => {
    try {
        const { email } = req.body
        console.log(email)
        const usuario = await Usuario.findOne({ correo: email }).exec()

        if (!usuario) {
            res.status(404).json({ msg: 'No se encontro usuario' })
            return
        }

        const { _id } = usuario
        const nuevaPass = generarPass(16)
        await Usuario.updateOne(
            { _id },
            { cambiarPassword: true, tempPassword: nuevaPass }
        )

        // enviarEmail(nuevaPass)
        emailer.sendMail(usuario, true, nuevaPass)

        res.status(200).json({ msg: 'ok' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.cambiarPass = async (req = request, res = response) => {
    try {
        const { tempPass, nuevaPass, id } = req.body
        const usuario = await Usuario.findOne({ _id: id }).exec()

        if (!usuario) {
            res.status(404).json({ msg: 'No se encontro usuario' })
            return
        }

        const { cambiarPassword, tempPassword } = usuario

        if (!cambiarPassword) {
            res.status(404).json({ msg: 'Cambio de contrasena no solicitado' })
            return
        }

        if (tempPass !== tempPassword) {
            res.status(404).json({ msg: 'Contrasena Incorrecta' })
            return
        }

        await Usuario.updateOne(
            { _id: id },
            { password: nuevaPass, cambiarPassword: false, tempPassword: '' }
        )
        res.status(200).json({ msg: 'Contrasena Cambiada exitosamente' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
