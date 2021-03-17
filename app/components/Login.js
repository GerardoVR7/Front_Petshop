import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";
import {Link} from "react-router-dom";
import Header from "./Header";

class Login extends React.Component{

    constructor() {
        super();
        this.state = {
            username:'',
            password:''
        }

        this.verification1 = false
        this.verification2 = false
        this.verificationRols = false
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
                if (data.status === true) {
                    this.verification1 = true
                }

                if (data.idRol === 1){
                    this.verificationRols = true
                }else
                {
                    this.verificationRols = false
                }

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
            if (data.status === true) {
                this.verification2 = true
            }
            alert(JSON.stringify(data))
            window.localStorage.setItem('token',data.token)



        }, error =>{
            this.pass.innerHTML = error.message
            this.verification2 = false
        })

    }

    render() {
        return(

            <section  style={{
                backgroundImage: 'url("public/images/klk.jpg")', height:1033, width:1520
            }}>

                    <h2 id="textcolor"> <Header/> </h2>
                <section className="justify-content-center" id="login">
                    <div className="container my-5 text-white"  >
                        <div className="row d-flex justify-content-center" >
                            <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 border  " id="parte1" style={{
                                backgroundImage: 'url("public/images/fondo.png")'
                            }}>

                                <h1 className="display-6 py-3" id="textcolor" >Login

                                </h1>
                                <img src="public/images/login.png" width={225} height={150} />
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center" id="form" >
                            <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 border  " id="parte1" style={{
                                backgroundImage: 'url("public/images/fondo.png")'
                            }}>


                                <br/>
                                <form >
                                    <div className="mb-3"  >
                                        <label htmlFor="username" className="form-label" id="textcolor" >Nombre de usuario</label>
                                        <input type="text"
                                               className="form-control"
                                               name="username"
                                               id="username"
                                               placeholder="ingresa tu usuario"
                                               aria-describedby="usernameHelp"
                                               value={this.state.username}
                                               onChange={this.changeField.bind(this)}
                                               onBlur={this.usernameValidate.bind(this)}/>
                                        <div className="label-error" ref={ self => this.label = self} id="textcolor"></div>
                                    </div>
                                    <br/>
                                    <div className="py-3">
                                        <label htmlFor="password" className="form-label" id="textcolor">Contraseña</label>
                                        <input type="password"
                                               className="form-control"
                                               name="password"
                                               id="password"
                                               placeholder="inserta una password"
                                               aria-describedby="passwordHelp"
                                               value={this.state.password}
                                               onChange={this.changeField.bind(this)}
                                               onBlur={this.iniciarSesion.bind(this)}/>
                                        <div className="label-error" ref={ self => this.pass = self} id="textcolor"> </div>
                                    </div>
                                    <br/>
                                    <div className="d-grid gap-3 py-3">
                                        <If condition = { this.verification1 === true && this.verification2 === true } >
                                            <If condition={ this.verificationRols === true }>
                                                <Link to='/HomeAdmin'>
                                                <button type="button" className="btn btn-outline-light"  id="textcolor">Iniciar sesión</button>
                                                </Link>
                                            </If>
                                            <If condition={ this.verificationRols === false }>
                                                <Link to='/HomeClient'>
                                                    <button type="button" className="btn btn-outline-light"  id="textcolor">Iniciar sesión</button>
                                                </Link>
                                            </If>
                                        </If>

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