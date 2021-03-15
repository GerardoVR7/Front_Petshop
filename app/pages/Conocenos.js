import React from "react";
import {Link} from "react-router-dom";
import HeaderClient from "../components/HeaderClient";

class Conocenos extends React.Component{
    render(){
        return(
                <div className="xd justify-content-center" id="conocenos" style={{
                    backgroundImage: 'url("public/images/fondoHome.jpg")', height:1920, width:1080
                }}>
                    <HeaderClient />
                    <div className="row justify-content-center"  >
                        <ul style={{ height:400, width:600}}>
                            <li className="card">
                                <img className="card-img-top" alt="Bootstrap Thumbnail First"
                                     src='public/images/Friends.jpg'/>
                                <div className="card-block">
                                    <h5 className="card-title">
                                        Somos una empresa responsable con el cuidado de tu peludito
                                    </h5>
                                    <p className="card-text">
                                       Por que nuestra mision es Proporcionar servicios integrales de la más alta calidad para las mascotas a través de
                                        sistemas preventivos, emergentes y de medicina interna para así mejorar la salud de las personas incrementando
                                        la relación Humano-Animal.
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
                                     src='public/images/PerriLicenciados.jpg'/>
                                <div className="card-block">
                                    <h5 className="card-title">
                                        DE TU INTERÉS
                                    </h5>
                                </div>
                            </li>
                            <p >
                                dales a tus mascotas la alimentacion perfecta, con nuestros especialistas
                                que te daran un plan nutritivo para la buena alimentacion de tu mascota.
                            </p>
                        </ul>
            </div>
                </div>
        )
    }
}
export default Conocenos;
