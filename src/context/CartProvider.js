import { useState } from "react";
import { CartContext } from "./CartContex"

export const CartProvider = ({children}) => {

  let localstorage = JSON.parse(localStorage.getItem("carrito"))
 if(localstorage === null){
  localstorage=[]
 }
 
    const [cartProducts, setCartProducts] = useState(localstorage);



    const existe = (id)=>{
      const productoExiste = cartProducts.some((item) => item.id === id)
      return productoExiste
    }
   
    
    const agregarProductoCarrito = (producto, cantidad)=>{
      const cartProductsCopy =  [...cartProducts]
      if(existe(producto.id)){

        console.log(producto.id)
       const indexProduct = cartProductsCopy.findIndex((item) => item.id === producto.id)
       cartProductsCopy[indexProduct].cantidad += cantidad
       setCartProducts(cartProductsCopy)
       localStorage.setItem("carrito", JSON.stringify(cartProductsCopy));
      }else{
        const productoMasCantidad = {
          ...producto,
          cantidad
        }
       
        cartProductsCopy.push(productoMasCantidad)

        setCartProducts(cartProductsCopy)
        localStorage.setItem("carrito", JSON.stringify(cartProductsCopy));
      }    
    }

  return (
    <CartContext.Provider value={{cartProducts,agregarProductoCarrito}}>
        {children}
    </CartContext.Provider>
  )
}
