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
            productList: []
        }

        this.productList = []
        //Extraer el catálogo de roles del backend
        APIInvoker.invokeGET('/products/getAllProducts', data => {  //Entrará acá cuando status = true
            this.setState({
                productList : data.data
            })
            console.log(this.state.productList)
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

    render() {

        return(



            <div>

                <Link to='/'>
                    <h2 id="textcolor"> <Header/> </h2>
                </Link>

                    <table name="idProducto" id="idProducto" value={this.state.idProducto} onChange={this.changeField.bind(this)} >
                        <tr>
                            <td> Stock </td>
                            <td> Nombre </td>
                            <td> Precio </td>
                        </tr>

                        <tr>

                            <td>
                                <For each="item" index="idx" of={ this.state.productList }>
                                    <li type="circle" key={idx} value={item.idProducto}>
                                        {item.Cantidad}
                                    </li>
                                </For>
                            </td>

                            <td>
                                <For each="item" index="idx" of={ this.state.productList }>
                                    <li type="circle" key={idx} value={item.idProducto}>
                                        {item.nombreProducto}
                                    </li>
                                </For>
                            </td>

                            <td>
                                <For each="item" index="idx" of={ this.state.productList }>
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









