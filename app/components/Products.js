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

            form: {
               nameProduct: '',
               price: '',
                cantidad: '',
               total:  ''
            },
            cantidadVendida:'',
            productList: [],
            categoryList: [],
            petList: [],
            specialList: [],
            subtotalList: [],


        }
        this.status = false
        this.productList = []
        this.categoryList = []
        this.petList = []
        this.specialList = []
        this.carrito = []




        //Extraer el catálogo de roles del backend
        APIInvoker.invokeGET('/products/getAllProducts', data => {  //Entrará acá cuando status = true
            this.setState({
                productList : data.data
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

        if (nameProduct) {
            APIInvoker.invokeGET(`/products/productSearch/${nameProduct}` , data => {

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

        })

    }

    }

    handleChange(e) {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    insertar(e){
        var valorNuevo= {...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista= this.state.subtotalList;
        lista.push(valorNuevo);
        console.log(this.state.subtotalList);

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


                <button type="button" className="btn btn-success">Success</button>

                </div>





        )

    }


}

export default Products;









