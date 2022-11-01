import "../ItemListContainer/ItemListContainer.css"
import {Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContex";

export const ItemListContainer = ({product}) => {
   const {id,title,image,precio} = product 
    
 const {addProductCart}=useContext(CartContext)
   
    return (
        <>
       
            <div className="card my-2 " >
                <div >
                <img src={image} className="card-img-top imagesList" alt="..."></img>
                    <div className="card-body">                       
                        <h4 className="card-title">{title}</h4>
                        <h5 className="text-danger">Precio: ${precio}</h5>                      
                        <Link to={`/detalle/${id}`} className="btn btn-primary mt-3" > ver más</Link>  
                        <button className="btn btn-success mt-3 ms-2" onClick={()=>addProductCart(product,product.cantidad)}>Agregar al Carrito</button>                     
                    </div>
                </div>
                
            </div>
        </>

    )
}
