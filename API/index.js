const express = require('express');
//importar mongo
const mongoose = require ('mongoose');
//importar el routing
const routes = require ("./routes");
//importar el body parse que envia datos
const bodyParser = require ('body-parser');
//la importacion del cors
const cors = require ('cors');

//server
const app = express();

// habilitacion de cors personalizada
const whitelist = ("http://localhost:3000");
const corsOptions = {
    origin: (origin, callback) => {
        //A consola
        const existe = whitelist.some((dominio) => dominio === origin);
        if (existe) {
            callback(null, true);
        }else {
            callback(new Error('No Permitido por CORS'));
        }
    },
};

//habilita corse
//conexion a corse
app.use(cors());
//conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/pet_family", {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: false,
});
//habilitar el bodyparse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// habilitar el routing
app.use(cors());
//puerto de calback
app.listen(4000, () =>{
    console.log('Servidor funcionando');
});