import React from "react";
import {Link} from "react-router-dom";
import Header from "./components/Header";

class Home extends React.Component{
    render(){
        return(
            <>

                <Header />
                <h1>
                    Bienvenido a la Pagina principal A garra patas</h1>
                <Link to='/Login'>
                    <h2>Login</h2>
                </Link>
                <Link to='/signup'>
                    <h2>SignUp</h2>
                </Link>
            </>
        )
    }
}
export default Home;