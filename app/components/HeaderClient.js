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
                                    <Link to='/Conocenos'className="nav-link">
                                        <a className="btn btn-primary btn-large justify-content-center " href="#">Conocenos</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Sucursales' className="nav-link">
                                        <a className="btn btn-primary btn-large justify-content-center " href="#">Acerca de nosotros</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="navbar-brand" href="#">
                                        <Link to='/HomeClient'>
                                        <img src='app/assets/icons/iconoHeader.png' width={260} height={200} alt="Logo de la aplicacion"  className="d-inline-block align-center"/>
                                        </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link to='/products' className="nav-link">
                                        <a className="btn btn-primary btn-large justify-content-center " href="#">Productos</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Citas' className="nav-link" >
                                        <a className="btn btn-primary btn-large justify-content-center " href="#">Citas</a>
                                    </Link>
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