const express = require('express');

const mongoose = require('mongoose');

const app = express();

//Conectar base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pet_family',{
    useNewUrlParser: true,
    useUnifiedtopology : true,
    useFindAndModify : false,
})

app.listen(4000, () => {
    Console.log('Servidor Funcionando');
})