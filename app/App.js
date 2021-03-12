import React from 'react'
import Login from './components/Login';
import SignUp from "./components/SignUp";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import HomeClient from "./pages/HomeClient";



class App extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/Login' component={Login}/>
                    <Route exact path='/SignUp' component={SignUp}/>
                    <Route exact path='/Products' component={Products}/>
                    <Route exact path='/HomeClient' component={HomeClient}/>
                    <Route component={NotFound}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;