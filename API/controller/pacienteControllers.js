//esta es la funcion con el router
const Paciente = require('.../models/Paciente');
//crea nuevos usuarios

exports.nuevoCliente = async (req, res, next) => {
//registrando datos
    const paciente = new Paciente(req.body);

try{
    await paciente.save();
    res.json({ mensaje: 'El cliente se agrego correctamente'});

    } catch (error) {
        console.log('error');
        //siguente función
        next();    
    }

    res.json({mensaje: ' el cliente se agrego correctamente '});
};
//obtiene datos de los pacientes
exports.obtenerPacientes = async (req, res, next) => {
   try{
       const pacientes = await Paciente.find({});
       res.json (pacientes);
   } catch (error){
        console.log(error);
        next();
   }
};