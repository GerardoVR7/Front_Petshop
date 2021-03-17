import React from "react";
import {Link} from "react-router-dom";
import HeaderClient from "../components/HeaderClient";

class Sucursales extends React.Component{
    render(){
        return(
            <div className="xd justify-content-center" id="conocenos" style={{
                backgroundImage: 'url("public/images/fondoHome.jpg")', height:1920, width:1080
            }}>
                <HeaderClient />
                </div>
        )
    }


}
export default Sucursales;