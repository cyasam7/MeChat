import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
/* import Chat from "./Pages/Chat"; */
import Salas from "./Pages/Salas";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/sala" component={Salas} />
        <Route exact path="/registrar" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
