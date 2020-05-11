import React,{ useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Switch} from "reac-route-dom";

import clienteAxios from "./config/axios";

//componentes
import Pacientes from "./components/Pacientes";
import NuevaCita from "./components/NuevaCita";
import Cita from "./component/Cita";

function App(){
    const[citas, guardarCitas] = useState([]);
    const[consultar,guardarConsultar] = useState(true);

    useEffect(() => {
        const consultarAPI =() => {
            clienteAxios
            .get("/pacientes")
            .then((respuestas) =>{
                
            })
        }
    })
}
}


export default App;