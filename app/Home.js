import React from "react";
import {Link} from "react-router-dom";
import Header from "./components/Header";

class Home extends React.Component{
    render(){
        return(
            <>

                <Header />

                <h1 className="row justify-content-center">
                    Bienvenido a la Pagina principal A garra patas</h1>
                <div className="row justify-content-center"  >
                    <ul style={{ height:400, width:600}}>
                        <li className="card">
                            <img className="card-img-top" alt="Bootstrap Thumbnail First"
                                 src='public/images/facebookperro.png'/>
                            <div className="card-block justify-content-center" >
                                <Link to='/Login'>
                                    <h2>Login</h2>
                                </Link>
                                <p>
                                </p>
                            </div>
                        </li>
                        <li className="card">
                            <img className="card-img-top" alt="Bootstrap Thumbnail Second"
                                 src='public/images/homePerro.png'/>
                            <div className="card-block">
                                <Link to='/signup'>
                                    <h2>SignUp</h2>
                                </Link>
                                <p>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
export default Home;