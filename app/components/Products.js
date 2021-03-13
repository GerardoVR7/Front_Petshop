import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";
import {Link} from "react-router-dom";
import Header from "./Header";

class Products extends React.Component {

    constructor() {
        super()
        this.state = {
            idProducto: '',
            nombre: '',
            precio: '',
            cantidad: '',
            categoria: '',
            tipoMascota: '',
            productList: [],
            categoryList: [],
            petList: [],
            specialList: []
        }

        this.productList = []
        this.categoryList = []
        this.petList = []
        this.specialList = []


        //Extraer el catálogo de roles del backend
        APIInvoker.invokeGET('/products/getAllProducts', data => {  //Entrará acá cuando status = true
            this.setState({
                productList : data.data
            })
            console.log(this.state.productList)
        }, error => { //Entrará acá cuando status = false
        })

        //Extraer el catálogo de roles del backend
        APIInvoker.invokeGET('/products/getAllCategory', data => {  //Entrará acá cuando status = true
            this.setState({
                categoryList : data.data
            })
            console.log(this.state.categoryList)
        }, error => { //Entrará acá cuando status = false
        })

        //Extraer el catálogo de roles del backend
        APIInvoker.invokeGET('/products/getAllPet', data => {  //Entrará acá cuando status = true
            this.setState({
                petList : data.data
            })
            console.log(this.state.petList)
        }, error => { //Entrará acá cuando status = false
        })
    }

    changeField(e) {
        let field = e.target.categoria
        let value = e.target.value

        this.setState(update(this.state, {
            [field]: {$set: value}
        }))
    }

    requestSpecification(e) {

        let espec = {
            categoria: this.state.categoria,
            tipoMascota: this.state.tipoMascota,

        }

        //Extraer el catálogo de roles del backend
        APIInvoker.invokeGET('/products/getAllCategory', espec, data => {  //Entrará acá cuando status = true
            this.setState({
                specialList : data.data
            })
            console.log(this.state.specialList)
        }, error => { //Entrará acá cuando status = false
        })

    }


    render() {

        return(



            <div>

                <Link to='/'>
                    <h2 id="textcolor"> <Header/> </h2>
                </Link>


                <div>




                    <form >
                        <div className="mb-3">
                            <label htmlFor="categoria" className="form-label">Categoria</label>
                            <input type="text"
                                   className="form-control"
                                   name="categoria"
                                   id="categoria"
                                   placeholder="ingresa tu nombre"

                                   value={this.state.categoria}
                                   onChange={this.changeField.bind(this)}/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="tipoMascota" className="form-label">Tipo Mascota</label>
                            <input type="text"
                                   className="form-control"
                                   name="tipoMascota"
                                   id="tipoMascota"
                                   placeholder="ingresa tu apellido"

                                   value={this.state.tipoMascota}
                                   onChange={this.changeField.bind(this)}/>

                        </div>

                        <div className="d-grid gap-3 py-3">
                            <button type="button" className="btn btn-outline-light" onClick={this.requestSpecification.bind(this)}>Iniciar sesión </button>

                        </div>
                    </form>
                </div>



                    <table name="idProducto" id="idProducto" value={this.state.idProducto} onChange={this.changeField.bind(this)} >
                        <tr>
                            <td> Stock </td>
                            <td> Nombre </td>
                            <td> Precio </td>
                        </tr>

                        <tr>

                            <td>
                                <For each="item" index="idx" of={ this.state.specialList }>
                                    <li type="circle" key={idx} value={item.idProducto}>
                                        {item.Cantidad}
                                    </li>
                                </For>
                            </td>

                            <td>
                                <For each="item" index="idx" of={ this.state.specialList }>
                                    <li type="circle" key={idx} value={item.idProducto}>
                                        {item.nombreProducto}
                                    </li>
                                </For>
                            </td>

                            <td>
                                <For each="item" index="idx" of={ this.state.specialList }>
                                    <li type="circle" key={idx} value={item.idProducto}>
                                        {item.Precio}
                                    </li>
                                </For>
                            </td>

                        </tr>
                    </table>




                </div>









        )

    }


}

export default Products;









