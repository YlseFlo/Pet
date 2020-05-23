//Son los datos reunidos para la base 
const mongoose = require('mongoose');
//la base que manejaremos es en mongo
const Schema = mongoose.Schema;

const pacienteSchema = new Schema({

    nombre:{
        type: String,
        trim:true,   
    },
    edad:{
        type:String,
        trim:true,
    },
    propietario:{
        type: String,
        trim:true,
    },
    correo :{
        type: String,
        trim: true,
    },
    fecha:{
        type:String,
        trim:true,
    },
    hora:{
        type: String,
        trim: true,
    },
    sintomas:{
        type: String,
        trim: true,
    }, 
    
});


module.experts = mongoose.model('Paciente', pacientesSchema);
