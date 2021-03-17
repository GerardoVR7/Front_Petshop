import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";
import {Link} from "react-router-dom";
import Header from "./Header";
import HeaderClient from "./HeaderClient";

class Products extends React.Component {

    constructor() {
        super()
        this.state = {
            idProducto: '',
            nombre: '',
            precio: '',
            cantidad: '',
            category: '',
            tipoMascota: '',
            productList: [],
            categoryList: [],
            petList: [],
            specialList: [],
            pakageList: []
        }
        this.status = false
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
/*
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


 */

        //Extraer el catálogo de roles del backend
        let categoria = this.state.category
        if (categoria) {
            APIInvoker.invokeGET(`/products/getAllAboutDogs/${categoria}`, data => {  //Entrará acá cuando status = true
                this.setState({
                    specialList: data.data
                })
                console.log(this.state.specialList)
            }, error => {
                //Entrará acá cuando status = false
                alert( "no hay nada")
            })
        }
    }

    changeField(e) {
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field]: {$set: value}
        }))
    }




    render() {

        return(



            <div>

                <Link to='/'>
                    <h2 id="textcolor"> <HeaderClient/> </h2>
                </Link>

                <div>

                <select name="categorySelect" id="category" value={this.state.category} onChange={this.changeField.bind(this)}>
                    <For each="item" index="idx" of={ this.state.specialList }>
                        <option key={idx} value={item.idProducto}>
                            {item.Categoria}
                        </option>
                    </For>

                </select>

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









