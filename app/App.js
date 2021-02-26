import React from 'react'
import Login from './Login';
import SignUp from "./SignUp";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";

class App extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/signup' component={SignUp}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;