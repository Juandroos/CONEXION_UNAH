const nodemailer = require('nodemailer')
const Usuario = require("../models/Usuario")




const createTrans = ()=>{
	var transport = nodemailer.createTransport({
  		host: "smtp.mailtrap.io",
  		port: 2525,
  		auth: {
    		user: "e9c4a5b6a55a73",
    		pass: "82ac4281977cb8"
 		 }
	});
	return transport;
}

const sendMail = async(usuario)=>{

	const transporter = createTrans()
	const info = await transporter.sendMail({
		from: '"Conexion_Voae@unah.hn"',
		to: `${usuario.correo}`,
		subject:"Hola " + `${usuario.nombre}`+ ", Bienvenido a la comunidad de Conexion VOAE",
		html:"<b>hola mundo</b>",
	});

	console.log("message sent: %s", info.messageId);

	return
}


exports.sendMail = (usuario) => sendMail(usuario)