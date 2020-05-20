import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
//
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
                <Route exact path="/" component={() => <Pacientes citas={}}
                <Router
                exact
                path="/nueva"
                component={() => <NuevaCita guardarConsultar={guardarConsultar}}
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