import React from "react";
import {Link} from "react-router-dom";

class Conocenos extends React.Component{
    render(){
        return(
                <div style={{
                    backgroundImage: 'url("public/images/fondoHome.jpg")', height:1920, width:1080
                }}>
                    <div className="row justify-content-center"  >
                        <ul style={{ height:400, width:600}}>
                            <li className="card">
                                <img className="card-img-top" alt="Bootstrap Thumbnail First"
                                     src='public/images/medicines.png'/>
                                <div className="card-block">
                                    <h5 className="card-title">
                                        Por que la salud de tu peludito es lo que importa
                                    </h5>
                                    <p className="card-text">
                                        porque aqui en Agarra Patas, la salud de tu peludito importa mucho, es por eso que
                                        manejamos productos, alimentos y servicios de la mas alta calidad para el bien estar de tu mascota.
                                    </p>
                                    <p>
                                    </p>
                                </div>
                                </li>
                <img src="public/images/mascota.jpg" align="right" width='200' height='400'/>
                <p>
                    <h2>
                        UN MISMO
                        <br/>
                        COMPROMISO
                        <br/>
                        SALUD ANIMAL
                        </h2>
                    Trabajamos con tenacidad y perseverancia para convertirnos en una empresa ampliamente reconocida por su alta calidad.
                </p>
                            <li className="card">
                                <img className="card-img-top" alt="Bootstrap Thumbnail Second"
                                     src='public/images/imgHome2.png'/>
                                <div className="card-block">
                                    <h5 className="card-title">
                                        Alimentacion Balanceada
                                    </h5>
                                    <p className="card-text">
                                        dales a tus mascotas la alimentacion perfecta, con nuestros especialistas
                                        que te daran un plan nutritivo para la buena alimentacion de tu mascota.
                                    </p>
                                    <p>
                                    </p>
                                </div>
                            </li>
                <Link to='/'>
                    <h2>Pagina principal</h2>
                </Link>
                        </ul>
            </div>
                </div>
        )
    }
}
export default Conocenos;
