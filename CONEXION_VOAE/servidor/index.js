'use strict'
const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

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

app.use('/api', require('./routes/usuario'));

 
app.listen(4000, ()=>{
    console.log('El servidor está corriendo bien');
})
