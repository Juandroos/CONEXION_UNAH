
const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Creamos el servidor
const app = express();

//Conectamos a la BDD
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/usuario', require('./routes/usuario'));

 
app.listen(4000, ()=>{
    console.log('El servidor esta corriendo bien');
})