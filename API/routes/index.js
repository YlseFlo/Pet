const router = express.Router();
// importacion de controladores
const pacienteController = require ('../controllers/pacienteControllers');

module.exports = function() {
//agregar nuevos pacientes por POST
router.post( 
    '/pacientes',
    //Importar controladores
    pacienteController.nuevoCliente
);
//REGISTRA LOS DATOS DE LOS CLIENTES BD
router.get('/pacientes', pacienteController.obtenerPacientes);

return router;

};