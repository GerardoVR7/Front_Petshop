import React from 'react'
import Login from './components/Login';
import SignUp from "./components/SignUp";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import HomeClient from "./pages/HomeClient";
import Conocenos from "./pages/Conocenos";
import ProductRegister from "./components/ProductRegister";
import Sucursales from "./pages/Sucursales";
import Citas from "./pages/Citas";
import HomeAdmin from "./pages/HomeAdmin";



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
                    <Route exact path='/Conocenos' component={Conocenos}/>
                    <Route exact path='/ProductRegister' component={ProductRegister}/>
                    <Route exact path='/Sucursales' component={Sucursales}/>
                    <Route exact path='/Citas' component={Citas}/>
                    <Route exact path='/HomeAdmin' component={HomeAdmin}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;