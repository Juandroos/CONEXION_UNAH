const Constancia = require("../models/Constancia");


exports.editarConstancia = async (req, res) => {

    try{
        let constancia;
        constancia = new Constancia(req.body);

        await constancia.save();
        res.send(constancia)

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerConstancias = async (req, res) =>{
    try{
        const constancias = await Constancia.find();
        res.json(constancias)
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
