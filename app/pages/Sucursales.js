import React from "react";
import {Link} from "react-router-dom";
import HeaderClient from "../components/HeaderClient";

class Sucursales extends React.Component{
    render(){
        return(
            <div className="xd justify-content-center" id="conocenos" style={{
                backgroundImage: 'url("public/images/fondoHome.jpg")', height:1920, width:1080
            }}>
                <HeaderClient />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="jumbotron">
                                        <img className="card-img-top" alt="Bootstrap Thumbnail First"
                                             src='public/images/Pichi.jpeg' height='420' width='200' />
                                        <p>
                                            Christian Alonso Perez Trujillo administrador y Jefe de Área de Pequeños Animales Hospital Clínico Veterinario Complutense.
                                            Los veterinarios se afrontan cada día a nuevos retos para tratar a sus pacientes. Este máster especializa al profesional veterinario en Traumatología y Cirugía Ortopédica a través de
                                            una formación teórico-práctica impartida por profesionales con dilatada experiencia y reconocimiento a nivel mundial en este ámbito.
                                        </p>
                                        <p>
                                            <a className="btn btn-primary btn-large" href="#">Conocelo</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="jumbotron">
                                        <img className="card-img-top" alt="Bootstrap Thumbnail First"
                                             src='public/images/Mayito.jpeg' height='420' width='200'/>
                                        <p>
                                            Mario Arturo Alday Jimenez Cooadministrador y Responsable del departamento de Nutrición.
                                            El Máster en Nutrición Animal está diseñado para que los Profesionales Veterinarios actualicen
                                            y perfeccionen sus conocimientos técnicos y prácticos en el sector de la Nutrición Animal.
                                            Este Programa está enfocado en la Nutrición de los animales destinados a la producción de proteína,
                                            monogástricos (aves y cerdos) y rumiantes (bovinos). Un máster completo y eficaz que te impulsara a más alto nivel de competencia.
                                        </p>
                                        <p>
                                            <a className="btn btn-primary btn-large" href="#">Conocelo</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="jumbotron">
                                        <img className="card-img-top" alt="Bootstrap Thumbnail First"
                                             src='public/images/Yera.jpeg' height='420' width='200'/>
                                        <p>
                                            Gerardo Vazquez Roman SubAdministrador y Experto e Instructor en Terapias e Intervenciones Asistidas con Animales.
                                            En los últimos años, las Terapias e Intervenciones Asistidas Con Animales han experimentado un gran auge en el panorama nacional, extrapolando su uso a diversas especialidades
                                        </p>
                                        <p>
                                            <a className="btn btn-primary btn-large" href="#">Conocelo</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        )
    }


}
export default Sucursales;