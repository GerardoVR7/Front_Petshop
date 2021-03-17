import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";
import {Link} from "react-router-dom";
import HeaderClient from "./HeaderClient";
import Header from "./Header";
import ProductRegister from "./ProductRegister";

class ProductDelete extends React.Component{

    constructor() {
        super()
        this.state = {
            idProducto: '',
            idCategory: '',
            nameProduct:'',
            price:'',
            quantity:'',
            petType: '',
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

        //Extraer el catálogo de roles del backend
        APIInvoker.invokeGET('/categories/getAllCategories',data => {  //Entrará acá cuando status = true
            this.setState({
                categoryList : data.data
            })
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

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field]: {$set: value}
        }))
    }



    updateData(e){

        //Extraer el catálogo de roles del backend
        let idCategory = this.state.idCategory
        if (idCategory) {
            APIInvoker.invokeGET(`/products/getAllAboutDogs/${idCategory}`, data => {  //Entrará acá cuando status = true
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

    deleteProduct(e){

        //Extraer el catálogo de roles del backend
        let idProducto = this.state.idProducto
        if (idProducto) {
            APIInvoker.invokePOST(`/products/deleteProduct/${idProducto}`, data => {  //Entrará acá cuando status = true
                alert(data.message)
            }, error => {
                alert(error.message )
            })
        }

    }

    render(){

        return(

            <div>

                <Link to='/'>
                    <h2 id="textcolor"> <HeaderClient/> </h2>
                </Link>

                <div>

                    <label htmlFor='idProducto'> Producto a eliminar</label>
                    <select name="idProducto" id="idProducto" value={this.state.idProducto} onChange={this.changeField.bind(this)}>
                        <For each="item" index="idx" of={ this.state.productList }>
                            <option key={idx} value={item.idProducto}>{item.nameProduct}</option>
                        </For>

                    </select>


                </div>


                <table name="idProducto" id="idProducto" value={this.state.idProducto} onChange={this.changeField.bind(this)} >
                    <tr>
                        <td> ID </td>
                        <td> Stock </td>
                        <td> Nombre </td>
                        <td> Precio </td>
                    </tr>

                    <tr>

                        <td>
                            <For each="item" index="idx" of={ this.state.productList }>
                                <li type="circle" key={idx} value={item.idProducto}>
                                    {item.idProducto}
                                </li>
                            </For>
                        </td>

                        <td>
                            <For each="item" index="idx" of={ this.state.productList }>
                                <li type="circle" key={idx} value={item.idProducto}>
                                    {item.quantity}
                                </li>
                            </For>
                        </td>

                        <td>
                            <For each="item" index="idx" of={ this.state.productList }>
                                <li type="circle" key={idx} value={item.idProducto}>
                                    {item.nameProduct}
                                </li>
                            </For>
                        </td>

                        <td>
                            <For each="item" index="idx" of={ this.state.productList }>
                                <li type="circle" key={idx} value={item.idProducto}>
                                    {item.price}
                                </li>
                            </For>
                        </td>

                    </tr>
                </table>

                <button type="button" className="btn btn-outline-light"  id="textcolor" onClick={this.deleteProduct.bind(this)}> ELIMINAR </button>

            </div>


        )

    }

}

export default ProductDelete;