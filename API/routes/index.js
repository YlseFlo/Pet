//entrada al sistema exportacion
const express =require('express');
const router = express.Router();
// importacion de controladores
const pacienteController = require ("../controller/pacienteControllers");

module.exports = function() {
//agregar nuevos pacientes por POST
router.post( 
    '/pacientes',
    //Importar controladores
    pacienteController.nuevoCliente
);
//REGISTRA LOS DATOS DE LOS CLIENTES BD--ylse
router.get('/pacientes', pacienteController.obtenerPacientes);

return router;

};