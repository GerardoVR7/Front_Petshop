import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";
import {Link} from "react-router-dom";
import HeaderClient from "./HeaderClient";
import Header from "./Header";

class ProductRegister extends React.Component{


    constructor() {
        super();
        this.state = {
            nameProduct:'',
            price:'',
            count:'',
            category:'',
            petType: ''
        }
        this.status = false
    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    productValidate(e) {
        let nameProduct = this.state.nameProduct
        if (nameProduct) {
            APIInvoker.invokeGET(`/products/productValidate/${nameProduct}`,data => {
                this.username.innerHTML = '* El nombre de usuario no está disponible'
                this.usernameOk = false
            }, error => {
                this.username.innerHTML = '* El nombre de usuario está disponible'
                this.usernameOk =  true
            })
        } else
            this.usernameOk = false
    }


    altProduct(e){
        this.messageError.innerHTML = ''
        this.validarCampos()
        if (this.status && this.usernameOk) {
            let product = {
                nameProduct: this.state.nameProduct,
                price: this.state.price,
                count: this.state.count,
                category: this.state.category,
                petType: this.state.petType
            }
            APIInvoker.invokePOST('/products/insertProduct',product, data => {
                alert(data.message)
                this.usernameOk = false
            }, error => {
                alert(error.message + error.error)
            })}else
            this.messageError.innerHTML = 'Los campos marcados con * son obligatorios'
        e.preventDefault();
    }
    validarCampos(){
        let estado = true;
        if (this.state.nameProduct.length === 0) {
            this.nameProduct.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.nameProduct.innerHTML = ''

        if (this.state.price.length === 0) {
            this.price.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.price.innerHTML = ''

        if (this.state.count.length === 0) {
            this.count.innerHTML = '* Campo obligatorio'
            estado = false;
        }

        if (this.state.category.length === 0) {
            this.category.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.category.innerHTML = ''

        if (this.state.petType.length === 0) {
            this.petType.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.petType.innerHTML = ''

        if (estado === false)
            this.status = false
        else
            this.status = true
    }

    render() {
        return(
            <section className="xd justify-content-center" id="signup" style={{
                backgroundImage: 'url("public/images/klk.jpg")', height:1033, width:1520
            }}>
                <div className="container my-5 text-white justify-content-center">
                    <Header/>
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 justify-content-center" id="parte1" style={{
                            backgroundImage: 'url("public/images/img_3.png")'
                        }}>

                            <h1 className="display-6 py-3 ">Agarra Patas Petshop Product Register

                            </h1>
                            <div>
                                <img src="public/images/Los-animales-más-celosos-3.gif" width={225} height={150} id="imagen"/>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center" >
                        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 border " id="parte1" style={{
                            backgroundImage: 'url("public/images/img_3.png")'
                        }}>
                            <br/>
                            <br/>
                            <form >
                                <div className="mb-3">
                                    <label htmlFor="nameProduct" className="form-label">Nombre del producto</label>
                                    <input type="text"
                                           className="form-control"
                                           name="nameProduct"
                                           id="nameProduct"
                                           placeholder="ingresa el nombre del producto"
                                           aria-describedby="usernameHelp"
                                           value={this.state.nameProduct}
                                           onChange={this.changeField.bind(this)}
                                           onBlur={this.productValidate.bind(this)}/>
                                    <label ref={self=> this.nameProduct = self}></label>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Precio del producto</label>
                                    <input type="text"
                                           className="form-control"
                                           name="price"
                                           id="price"
                                           placeholder="ingresa el precio del producto"
                                           aria-describedby="apellidoHelp"
                                           value={this.state.price}
                                           onChange={this.changeField.bind(this)}/>
                                    <label ref={self=> this.price = self}></label>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="countProduct" className="form-label">ingresar la cantidad</label>
                                    <input type="text"
                                           className="form-control"
                                           name="count"
                                           id="count"
                                           placeholder="ingresa la cantidad deseada"
                                           aria-describedby="usernameSignupHelp"
                                           value={this.state.count}
                                           onChange={this.changeField.bind(this)}
                                           onBlur={this.productValidate.bind(this)}/>
                                    <label ref={self=> this.count = self}></label>

                                </div>
                                <div className="py-3">
                                    <label htmlFor="category" className="form-label">Categoria del Producto</label>
                                    <input type="text"
                                           className="form-control"
                                           name="category"
                                           id="category"
                                           placeholder="inserta una categoria"
                                           aria-describedby="passwordHelp"
                                           value={this.state.category}
                                           onChange={this.changeField.bind(this)}/>
                                    <label ref={self=> this.category = self}></label>

                                </div>

                                <div className="py-3">
                                    <label htmlFor="petType" className="form-label">Tipo de mascota</label>
                                    <input type="text"
                                           className="form-control"
                                           name="petType"
                                           id="petType"
                                           placeholder="inserta el tipo de mascota"
                                           aria-describedby="passwordHelp"
                                           value={this.state.petType}
                                           onChange={this.changeField.bind(this)}/>
                                    <label ref={self=> this.petType = self}></label>

                                </div>
                                <div className="d-grid gap-3 py-3">
                                    <button type="button" className="btn btn-outline-light" onClick={this.altProduct.bind(this)}>Iniciar sesión </button>
                                    <div ref={self => this.messageError = self}></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>


        )
    }


}

export default ProductRegister;