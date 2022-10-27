import { useState } from "react";
import { CartContext } from "./CartContex"

export const CartProvider = ({children}) => {
 
    const [cartProducts, setCartProducts] = useState([]);

    const existe = (id)=>{
      const productoExiste = cartProducts.some((item) => item.id === id)
      return productoExiste
    }
   
    
    const agregarProductoCarrito = (producto, cantidad)=>{
         
      if(existe(producto.id)){
        console.log('producto ya existe')
      }else{
        const productoMasCantidad = {
          ...producto,
          cantidad
        }
        const cartProductsCopy =  [...cartProducts]
        cartProductsCopy.push(productoMasCantidad)

        setCartProducts(cartProductsCopy)
      }    
    }

  return (
    <CartContext.Provider value={{cartProducts,agregarProductoCarrito}}>
        {children}
    </CartContext.Provider>
  )
}
