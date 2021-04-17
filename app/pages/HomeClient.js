import React from "react";
import {Link} from "react-router-dom";
import HeaderClient from "../components/HeaderClient";

class HomeClient extends React.Component{
    render(){
        return(
            <div style={{
                backgroundImage: 'url("public/images/fondoHome.jpg")', height:2220, minWidth:1520, maxWidth: 2500
            }}>


                <HeaderClient />

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
                        <li className="card">
                            <img className="card-img-top" alt="Bootstrap Thumbnail Third"
                                src='public/images/imgHome3.png'/>
                            <div className="card-block">
                                <h5 className="card-title">
                                    Veterinarios Especializados
                                </h5>
                                <p className="card-text">
                                    con un amplio equipo de herramientas y veterinarios especializados en
                                    todo tipo de mascotas, no dudes en brindarnos tu confianza y traernos a tus mascotas
                                    para que les demos el trato que se merecen.

                                </p>
                                <p>
                                </p>

                            </div>
                        </li>
                        </ul>
                </div>


            </div>
        )
    }
}
export default HomeClient;