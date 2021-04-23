import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";
import {Link} from "react-router-dom";
import Header from "./Header";
import HeaderClient from "./HeaderClient";
import {Table} from "reactstrap";


class Products extends React.Component {

    constructor() {
        super()
        this.state = {
            idProducto: '',
            idCategory: '',
            nameProduct:'',
            price:'',
            quantity:'',
            petType: '',
            total: '',


            cantidadVendida:'',
            productList: [],
            categoryList: [],
            petList: [],
            specialList: [],
            subtotalList: [],
            carritoList: []


        }
        this.status = false
        this.productList = []
        this.categoryList = []
        this.petList = []
        this.specialList = []
        this.carritoList = []




        //Extraer el catálogo de roles del backend
        APIInvoker.invokeGET('/products/getAllProducts', data => {  //Entrará acá cuando status = true
            this.setState({
                productList : data.data
            })

        }, error => { //Entrará acá cuando status = false
        })

        //Extraer el catálogo de roles del backend
        APIInvoker.invokeGET('/sells/getAllVentas', data => {  //Entrará acá cuando status = true
            this.setState({
                carritoList : data.data
            })

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


            }, error => {
                //Entrará acá cuando status = false
                alert( "no hay nada")
            })
        }


    }

    addToCar(e){
            //añadir al carrito

        let nameProduct = e
        let aux = 0;
        let aux2 = 0;
        if (nameProduct) {
            APIInvoker.invokeGET(`/products/productSearch/${nameProduct}` , data => {
                    aux = data.data.idProducto;
                    aux2 = data.data.quantity - this.state.cantidadVendida;
                    let sell = {
                    nameProduct: data.data.nameProduct,
                    quantitySold: this.state.cantidadVendida,
                    price: data.data.price
                }
                APIInvoker.invokePOST('/products/insertProductSell',sell, data => {
                    alert(data.message)

                }, error => {
                    alert(error.message + error.error)
                })

                let aux3 = {
                    quantity: data.data.quantity - this.state.cantidadVendida,
                    idProducto: data.data.idProducto
                }
                APIInvoker.invokePOST('/products/updateProduct',aux3, data => {  //Entrará acá cuando status = true

                }, error => {
                    //Entrará acá cuando status = false
                    alert( "no hay nada")
                })

                console.log(aux)
                console.log(aux2)
        })



    }


    }

    calculo(e){
        var count =0;
        var valor = 0;
            for(var i=0; i<this.state.carritoList.length ; i++){

                valor = this.state.carritoList[i].quantitySold * this.state.carritoList[i].price;
                count = count + valor;
            }

       alert("Precio a pagar:        "  + count )

        console.log(this.state.carritoList.length)
        console.log(count)

        for (var i=0; i<this.state.carritoList.length ; i++){

            let delSell = this.state.carritoList[i].idVenta

            console.log(delSell)

            APIInvoker.invokePOST(`/sells/deleteSell/${delSell}`, data => {
                alert(data.message)

            }, error => {
                alert(error.message + error.error)
            })

        }



    }

    render() {

        return(

            <div>

                <Link to='/'>
                    <h2 id="textcolor"> <HeaderClient/> </h2>
                </Link>

                <div>

                    <label htmlFor='idCategory'>Tipo de categoria</label>
                    <select name="idCategory" id="idCategory" value={this.state.idCategory} onChange={this.changeField.bind(this)} onBlur={this.updateData.bind(this)}>
                        <For each="item" index="idx" of={ this.state.categoryList }>
                            <option key={idx} value={item.idCategoria}>{item.nombre}</option>
                        </For>

                    </select>

                </div>

                <Table className='container'>
                <thead>
                <tr>
                    <th> ID </th>
                    <th> Nombre </th>
                    <th> Precio </th>
                    <th> Cantidad </th>
                </tr>
                </thead>
                <tbody >
                    {
                        this.state.specialList.map((producto, index)=>(
                            <tr>
                                <td className='list-group-item' key={`item-${index}`}>
                                    {producto.idProducto}
                                </td>

                                <td >
                                    {producto.nameProduct}
                                </td>

                                <td >
                                    {producto.price}
                                </td>

                                <td >
                                    {producto.quantity}
                                </td>

                                <td>
                                    <button color="primary" onClick={(e)=> this.addToCar(producto.nameProduct, e)}>
                                        Añadir al carrito
                                    </button>
                                </td>

                                <td>
                                    <div className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cantidadVendida"
                                        id="cantidadVendida"
                                        placeholder="ingresa la cantidad deseada"
                                        aria-describedby="cantidadVendidaHelp"
                                        value={this.state.cantidadVendida}
                                        onChange={this.changeField.bind(this)}/>
                                        <label ref={self=> this.cantidadVendida = self}></label>

                                    </div>

                                </td>

                            </tr>

                        ))
                    }
                </tbody>
                </Table>

                <br/>
                <br/>

                <aside className="col-sm-4"/>
                    <h2>Carrito</h2>

                <Table className='container'>
                    <thead>
                    <tr>
                        <th> Nombre </th>
                        <th> Precio </th>
                        <th> Cantidad </th>
                    </tr>
                    </thead>
                    <tbody >
                    {
                        this.state.carritoList.map((venta, index)=>(
                            <tr>

                                <td >
                                    {venta.nameProduct}
                                </td>

                                <td >
                                    {venta.price}
                                </td>

                                <td >
                                    {venta.quantitySold}
                                </td>

                            </tr>

                        ))
                    }
                    </tbody>

                </Table>


                <button type="button" className="btn btn-success" onClick={this.calculo.bind(this)}>Success</button>

                </div>





        )

    }


}

export default Products;









