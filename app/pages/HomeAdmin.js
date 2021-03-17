import React from "react";
import {Link} from "react-router-dom";

class HomeAdmin extends React.Component{
    render(){
        return(
            <>

                <div className="row justify-content-center"  >
                    <ul style={{ height:400, width:600}}>
                        <li className="card">
                            <img className="card-img-top" alt="Bootstrap Thumbnail First"
                                 src='public/images/addProduct.png'/>
                            <div className="card-block justify-content-center" >
                                <Link to='/ProductRegister'>
                                    <h2>añadir producto</h2>
                                </Link>
                                <p>
                                </p>
                            </div>
                        </li>
                        <li className="card">
                            <img className="card-img-top" alt="Bootstrap Thumbnail Second"
                                 src='public/images/Delete.png'/>
                            <div className="card-block">
                                <Link to='/DeleteProduct'>
                                    <h2>Borrar Producto</h2>
                                </Link>
                                <p>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
export default HomeAdmin;