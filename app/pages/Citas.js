import React, {useState} from "react";
import {Link} from "react-router-dom";
import HeaderClient from "../components/HeaderClient";


class Citas extends React.Component{
    render(){
        return(

            <div className="container">
                <HeaderClient/>
                <div>



                <div className="container">


                    <div className="row align-items-center my-5">
                        <div className="col-lg-7">
                            <img className="img-fluid rounded mb-4 mb-lg-0" src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5af41abe5cafe857853c986b/perro-viejito-parrafo.jpg" alt=""/>
                        </div>

                        <div className="col-lg-5">
                            <h1 className="font-weight-light">Recomendaciones de expertos</h1>
                            <p>A continuacion te daremos algunos consejos que podrian ser de ayuda para el cuidado de tu
                            compañero, porque aqui en Agarra Patas nos importa mucho el como se tratan a nuestros fieles compañeros</p>
                        </div>

                    </div>



                    <div className="card text-white bg-secondary my-5 py-4 text-center">
                        <div className="card-body">
                            <p className="text-white m-0">Si recoges un perro hambriento de
                                la calle y lo haces próspero, no te morderá; esa es la principal
                                diferencia entre un perro y un hombre.</p>
                        </div>
                    </div>

               <div className="row">
                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h2 className="card-title">Alimentacion</h2>
                                    <p className="card-text">Esta es una parte importante, por lo que necesitas tomar precauciones.
                                        Son animales acostumbrados a estar libres, volar y buscar su propio alimento, además que la
                                        domesticación puede aumentar los niveles de obesidad. Cada ave necesita una alimentación determinada
                                        y semillas específicas, así que lo más recomendable es que investigues cuál es la adecuada para su raza
                                        y buscarlas en tiendas especializadas.</p>
                                </div>
                                <div className="card-footer">

                                    <a href="https://nutricionanimal.info/una-correcta-nutricion-para-lograr-el-bienestar-animal-2/" className="btn btn-primary btn-sm">More Info</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h2 className="card-title">Su espacio</h2>
                                    <p className="card-text">Tener cuatro patas (suponemos) y ser peludo no es una razón para no ofrecerle lo mejor.
                                        Así hemos visto cosas muy originales y curiosas para crear un espacio específico para la mascota que nos han
                                        encantado: desde verdaderos mini dormitorios hasta un bonito canasto integrado a un mueble parando por el tradicional
                                        uso de la parte baja de las escaleras.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="https://decoracion.trendencias.com/varios/17-ideas-para-crear-un-rincon-adaptado-para-tu-mascota#:~:text=En%20el%20caso%20de%20los,cama%20m%C3%A1s%20grande%20y%20personalizada." className="btn btn-primary btn-sm">More Info</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h2 className="card-title">Temperatura</h2>
                                    <p className="card-text">La luz natural es importante para que se sienta ambientado,
                                        pero debes tener cuidado a no exponerlo a altos grados de calor, ellos buscan el
                                        refugio de los árboles y la sombra en su hábitat natural por lo que un ambiente
                                        fresco será ideal para ellos. También debes tener cuidado con el frío.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="https://paylesspower.com/es/blog/la-mejor-temperatura-para-sus-mascotas/#" className="btn btn-primary btn-sm">More Info</a>
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
export default Citas;