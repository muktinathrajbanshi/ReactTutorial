import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import Service from "./Service";
import User from "./User";
import Search from "./Search";


const App = () => {


    return(
        <>
        <Menu />
        <Switch>
            <Route exact path="/" component={ () => <About name="About" /> } />
            <Route exact path="/service" render={ () => <Service name="Service" /> } />
            <Route exact path="/search" component={Search} />    
            <Route path="/user/:name/:lname" component={User} />
            <Route exact path="/contact" component={Contact} /> 
            <Route component={Error} />
        </Switch>

        </>
    );
};

export default App;