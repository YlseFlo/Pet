import React from "react";
import ReactDON from  "react-dom";
import App from "./App";
import * as  serviceWorker from "./serviceWorker";

ReactDON.render(<App />, document.getElementById("root"));

serviceWorker.unregister();