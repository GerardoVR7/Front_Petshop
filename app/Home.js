import React from "react";
import {Link} from "react-router-dom";

class Home extends React.Component{
    render(){
        return(
            <>

                <h1>
                    <img src="public/images/img_2.png" width={800} height={200} />
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