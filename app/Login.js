import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "./utils/APIInvoker";

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
                this.label.innerHTML = ''
            },
            error => {
                //let label = document.getElementById('usernameMessage')
                this.label.innerHTML = 'la cuenta del usuario no existe'
            })
    }
    iniciarSesion(e){
        let user = {
            username: this.state.username,
            password: this.state.password
        }

        APIInvoker.invokePOST('/users/login',user,data => {
            alert(JSON.stringify(data))
            window.localStorage.setItem('token',data.token)
        }, error =>{
            this.pass.innerHTML = error.message
        })
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
                                               onBlur={this.usernameValidate.bind(this)}/>
                                        <div className="label-error" ref={ self => this.label = self}></div>
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
                                        <div className="label-error" ref={ self => this.pass = self}> </div>
                                    </div>
                                    <br/>
                                    <div className="d-grid gap-3 py-3">
                                        <button type="button" className="btn btn-outline-light" onClick={this.iniciarSesion.bind(this)}>Iniciar sesión</button>
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