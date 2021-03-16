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
                <Link to='/products'>
                    <h2>Products</h2>
                </Link>
                <Link to='/HomeClient'>
                    <h2>home</h2>
                </Link>
                <Link to='/Conocenos'>
                    <h2>Conocenos</h2>
                </Link>
                <Link to='/ProductRegister'>
                    <h2>Admin Product prueba</h2>
                </Link>
            </>
        )
    }
}
export default Home;