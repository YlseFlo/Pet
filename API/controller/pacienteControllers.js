const Paciente = require('.../models/Paciente');
//crea nuevos usuarios

exports.nuevoCliente = (req, res, next) => {

    const paciente = new Paciente(req.body);
    res.json({'el cliete se agrego correctamente '});
};