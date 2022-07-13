'use strict'
const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer'); // Maneja archivos en el servidor

//Creamos el servidor
const app = express();

//Conectamos a la BDD
conectarDB();
app.use(cors());
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header(
        'Acces-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method'
    );
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({limit: '50mb', extended:true}))

// Guardar temporalmente la imagen
const storage = multer.diskStorage({
    destination: path.join(__dirname, '/public/uploads'),
    filename: (req, file, cb) => {
        const date = new Date();
        cb(null, date.getTime() + path.extname(file.originalname) );
    }
});

// Utilizando el middleware de multer
app.use(multer({storage}).single('image'));

app.use('/api/usuario', require('./routes/usuario'));
app.use('/api/actividad', require('./routes/actividad'));
app.use('/api/constancia', require('./routes/constancia'));

 
app.listen(4000, ()=>{
    console.log('El servidor está corriendo bien');
})
