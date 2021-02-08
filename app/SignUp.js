import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "./utils/APIInvoker";

class SignUp extends React.Component{


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
                <section className="justify-content-center" id="signup">
                    <div className="container my-5 text-white">
                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 border " id="parte1">
                                <h1 className="display-6 py-3">Agarra Patas Petshop Signup</h1>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 border " id="parte1">
                                <br/>
                                <br/>
                                <form >
                                    <div className="mb-3">
                                        <label htmlFor="nombre" className="form-label">Nombre</label>
                                        <input type="text"
                                               className="form-control"
                                                                        id="nombre"
                                               placeholder="ingresa tu nombre"
                                               aria-describedby="usernameHelp"
                                               value={this.state.nombre}
                                               onChange={this.changeField.bind(this)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="apellido" className="form-label">Apellido</label>
                                        <input type="text"
                                               className="form-control"
                                               name="apellido"
                                               id="apellido"
                                               placeholder="ingresa tu apellido"
                                               aria-describedby="apellidoHelp"
                                               value={this.state.apellido}
                                               onChange={this.changeField.bind(this)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="usernameSignup" className="form-label">Nombre de usuario</label>
                                        <input type="text"
                                               className="form-control"
                                               name="username"
                                               id="username"
                                               placeholder="ingresa tu usuario"
                                               aria-describedby="usernameSignupHelp"
                                               value={this.state.username}
                                               onChange={this.changeField.bind(this)}/>

                                    </div>
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
                                    <div className="d-grid gap-3 py-3">
                                        <button type="button" className="btn btn-outline-light" onClick={this.signup.bind(this)}>Iniciar sesión </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </section>


        )
    }


}

export default SignUp;