import "../ItemListContainer/ItemListContainer.css"
import {Link } from "react-router-dom";

export const ItemListContainer = ({product}) => {
   const {id,title,image,precio} = product 
   
  
   
    return (
        <>
       
            <div className="card my-2 " >
                <div >
                <img src={image} className="card-img-top imagesList" alt="..."></img>
                    <div className="card-body">                       
                        <h4 className="card-title">{title}</h4>
                        <h5 className="text-danger">Precio: ${precio}</h5>                      
                        <Link to={`/detalle/${id}`} className="btn btn-primary mt-3" ><i className="bi bi-eye"> ver más</i></Link>                       
                    </div>
                </div>
                
            </div>
        </>

    )
}
