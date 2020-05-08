const mongoose = require('mongoose');
const Schema = mongoose.Schema;

constpacieteSchema = new Schema({

    nombre:{
        type: String,
        trim:true,   
    },
    propietario:{
        type: String,
        trim:true,
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
