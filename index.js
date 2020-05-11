const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParse = require('body-parser');

const app = express();

//Conectar base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pet_family',{
    useNewUrlParser: true,
    useUnifiedtopology : true,
    useFindAndModify : false,
});

// Se habilita el Body Parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({entended: true}));

//--Midlewares-->
app.use('/',routes());

app.listen(4000, () => {
    Console.log('Servidor Funcionando');
})