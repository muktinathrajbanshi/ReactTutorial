import React from "react";
import Home from "./Home";
import { Switch } from "react-router-dom";

const App = () => {
    return(
        <>
        <Switch>
           <Home />
        </Switch>
        </>
    );
};

export default App;