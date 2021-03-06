import React from "react";
import {Link} from "react-router-dom";

class NotFound extends React.Component{
    render(){
        return(
            <>
                <h1>Pagina no encontrada</h1>
                <img src="public/images/notFound.png" width={800} height={400} />
                <Link to='/'>
                    <h2>Pagina principal</h2>
                </Link>
            </>
        )
    }
}
export default NotFound;