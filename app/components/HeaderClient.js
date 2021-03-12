import React from 'react'
import {Link} from "react-router-dom";

class HeaderClient extends React.Component {
    render() {
        return(
            <header>
                <div className="container-fluid" >
                    <div className="row" >
                        <div className="col-md-12" >
                            <ul className="nav nav-pills justify-content-center" >
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Conocenos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Acerca de nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="navbar-brand" href="#">
                                        <Link to='/'>
                                        <img src='app/assets/icons/iconoHeader.png' width={260} height={200} alt="Logo de la aplicacion"  className="d-inline-block align-center"/>
                                        </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Citas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Productos</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
};

export default HeaderClient;