const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});


const conectarDB = async()=>{
 try {
    await mongoose.connect(process.env.DB_MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
        //useFindAndModify: false,
    })
    console.log('BASE DE DATOS CONECTADA')
 } catch (error) {
    console.log(error);
    process.exit(1);//Detenemos el app
 }
}
module.exports=conectarDB;