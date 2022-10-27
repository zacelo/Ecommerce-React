import { useContext } from "react";
import { CartContext } from '../../context/CartContex'

export const CartWidget = () => {

 const {cartProducts} = useContext(CartContext);

 const cantidadProductosCarrito = cartProducts.reduce((acumulador, item)=>{
    return  acumulador + item.cantidad
  },0)    
   
    return (
        <>
            <button
                className="btn btn-danger"
                type="button">
                <i className="bi bi-cart3 fs-4"></i>
                <span className="ms-2 h4">{cantidadProductosCarrito}</span>
            </button>           
        </>
    )
}
