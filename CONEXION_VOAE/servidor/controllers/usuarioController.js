const { json } = require("express");
const Usuario = require("../models/Usuario");
const emailer = require('../config/emailer');

exports.crearUsuario = (req, res) => {
try {
    let usuario;

    //Creamos nuestro usuario
    usuario = new Usuario(req.body);
    
    usuario.save();//elimine await
    res.send(usuario);
    emailer.sendMail(usuario);

} catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
}
}

exports.obtenerUsuarios = async (req, res) => {
    try {
        
        const usuarios = await Usuario.find();
        res.json(usuarios);

    } catch (error) {
        console.log(error);
    res.status(500).send('Hubo un error');
    }
}

exports.actualizarUsuarios = async (req, res)=>{
    try {
        const {dni,nombre,apellido,telefono,nacimiento,facultad,carrera,cuenta,rol,correo,password}= req.body;
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({msg:'N existe un usuario'})
        }

        usuario.dni = dni;
        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.telefono = telefono;
        usuario.nacimiento = nacimiento;
        usuario.facultad = facultad;
        usuario.carrera = carrera;
        usuario.cuenta = cuenta;
        usuario.rol = rol;
        usuario.correo = correo;
        usuario.password = password;

/*         usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new:true },  (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
        
            console.log(doc);
        }); */
        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new:true });
        res.json(usuario)
    } catch (error) {
        console.log(error); 
    res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuario = async (req, res)=>{
    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({msg:'N existe un usuario'})
        }
        res.json(usuario);
    } catch (error) {
        console.log(error); 
    res.status(500).send('Hubo un error');
    }
}

exports.eliminarUsuarios = async (req, res)=>{
    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({msg:'N existe un usuario'})
        }
        await Usuario.findOneAndRemove({_id:req.params.id});
        res.json({msg:'Usuario Eliminado con exito.'});
    } catch (error) {
        console.log(error); 
    res.status(500).send('Hubo un error');
    }
}