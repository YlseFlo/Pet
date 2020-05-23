import React,{ useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-route-dom";

import clienteAxios from "./config/axios";

//componentes
import Pacientes from "./component/Pacientes";
import NuevaCita from "./component/NuevaCita";
import Cita from "./component/Cita";

function App() {
    const[citas, guardarCitas] = useState([]);
    const[consultar,guardarConsultar] = useState(true);

    useEffect(() => {
        const consultarAPI = () => {
            clienteAxios
            .get("/pacientes")
            .then((respuesta) => {
                // colocar los datos obtenidos
                guardarCitas(respuesta.data);
                
                guardarConsultar(false);
            })
            .cath((error) => {
                console.log(error);
            });
        };
        consultarAPI();
    }, [consultar]);
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={() => <Pacientes citas={} />}
               />
               <Route
                exact
                path="/nueva"
                component={() => <NuevaCita guardarConsultar={guardarConsultar} />}
                />

                <Route
                exact
                path="/cita/:id"
                render={(props) => {
                    const cita = citas.filter(
                        (cita)=> cita._id === props.match.params.id
                    );

                    return <Cita cita={cita[0]} guardarConsultar={guardarConsultar}></Cita>
                }}
                />
            </Switch>
        </Router>
    );
}

export default App;