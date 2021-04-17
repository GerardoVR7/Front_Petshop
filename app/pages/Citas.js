import React from "react";
import {Link} from "react-router-dom";
import HeaderClient from "../components/HeaderClient";

class Citas extends React.Component{
    render(){
        return(
            <div className="xd justify-content-center" id="conocenos" style={{
                backgroundImage: 'url("public/images/fondoHome.jpg")', height:1920, minWidth:1520, maxWidth: 2000
            }}>
                <HeaderClient />
                <img className="card-img-top" alt="Bootstrap Thumbnail First"
                     src='public/images/PugSegurity.png'/>
            </div>
        )
    }


}
export default Citas;