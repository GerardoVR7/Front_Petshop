import React from 'react'
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return(
            <header>
                <nav className="navbar navbar-light ">
                    <div className="container-fluid justify-content-center">
                        <a className="navbar-brand" href="#">
                            <Link to='/HomeAdmin'>
                                <img src='app/assets/icons/iconoHeader.png' width={260} height={200} alt="Logo de la aplicacion"  className="d-inline-block align-center"/>
                            </Link>
                        </a>
                    </div>
                </nav>
            </header>
        )
    }
};

export default Header;