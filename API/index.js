const express = require('express');
//importarmongo
const mongoose = require ('mongoose');
//importar el routing
const routes = require ('./routes');
//importar el body parse que envia datos
const bodyParse = require ('body-parse');
//la importacion del cors
const cors = require ('cors');

//server
const app = express();

// habilitacion de cors personalizada
const whitelist = ('http://localhost:3000');
const corsOptions = {
    origin: (origin, callback) => {
        //haa consola
        const existe = whitelist.some((dominio) => dominio === origin);
        if (existe){
            callback{null, true};
        }else {
            callback{new Error('No Permitido por CORS')}
        }
    },
};

//habilita corse
app.use(cors());
//conexion a corse
app.use(cors());
//conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pet_family'{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: false,
});
//habilitar el bodyparse
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true}));
// habilitar el routing
app,use('/', routes());
//puerto de calback
app.listen(4000, () =>{
    console.log('Servidor funcionando');
})