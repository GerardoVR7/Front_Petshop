import React from 'react'

class Header extends React.Component {
    render() {
        return(
            <header>
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src='app/assets/icons/iconoHeader.png' width={260} height={200} alt="Logo de la aplicacion"  className="d-inline-block align-center"/>
                        </a>
                    </div>
                </nav>
            </header>
        )
    }
};

export default Header;