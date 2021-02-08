import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "./utils/APIInvoker";
import {Link} from "react-router-dom";

class Login extends React.Component{

    constructor() {
        super();
        this.state = {
            username:'',
            password:''
        }
    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    usernameValidate(e){
        let username = this.state.username
        APIInvoker.invokeGET(`/users/usernameValidate/${username}`,
            data => {
                //Primera forma de obtener la referencia de un control en el DOM
                //let label = document.getElementById('usernameMessage')
                this.label.innerHTML = data.message
            },
            error => {
                //let label = document.getElementById('usernameMessage')
                this.label.innerHTML = error.message
            })
    }
    signup(e){
        //Signup
        let user = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            username: this.state.username,
            password: this.state.password
        }
        APIInvoker.invokePOST('/users/signup',user, data => {
            alert(JSON.stringify(data))
        }, error => {
            alert(JSON.stringify(error))
        })
        e.preventDefault();
    }

    render() {
        return(
            <section>
                <section className="justify-content-center" id="login">
                    <div className="container my-5 text-white" >
                        <div className="row d-flex justify-content-center" >
                            <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 border  " id="parte1" >
                                <h1 className="display-6 py-3">Agarra Patas Petshop Login</h1>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center" id="form" >
                            <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 border  " id="parte1">
                                <br/>
                                <br/>
                                <form >
                                    <div className="mb-3"  >
                                        <label htmlFor="username" className="form-label" >Nombre de usuario</label>
                                        <input type="text"
                                               className="form-control"
                                               name="username"
                                               id="username"
                                               placeholder="ingresa tu usuario"
                                               aria-describedby="usernameHelp"
                                               value={this.state.username}
                                               onChange={this.changeField.bind(this)}
                                        />
                                        <div id="usernameMessage"
                                             ref={ self => this.label = self}
                                             className="form-text text-white">
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="py-3">
                                        <label htmlFor="password" className="form-label">Contraseña</label>
                                        <input type="password"
                                               className="form-control"
                                               name="password"
                                               id="password"
                                               placeholder="inserta una password"
                                               aria-describedby="passwordHelp"
                                               value={this.state.password}
                                               onChange={this.changeField.bind(this)}/>
                                        <div id="passwordHelp"
                                             className="form-text text-danger">
                                        </div>
                                    </div>
                                    <br/>
                                    <a href="./SignUp.js" class="button"> AQUI PTM</a>

                                    <div className="d-grid gap-3 py-3">
                                        <button type="button" className="btn btn-outline-light" onClick={this.usernameValidate.bind(this)}>Iniciar sesión</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </section>
            </section>

        )
    }


}

export default Login;