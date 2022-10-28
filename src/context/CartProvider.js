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
   
    
    const addProductCart = (producto, cantidad)=>{
      const cartProductsCopy =  [...cartProducts]
      if(existe(producto.id)){       
        const cartProductsCopy =  [...cartProducts]
        const indexProduct = cartProductsCopy.findIndex((item) => item.cantidad === cantidad)
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

    const deleteProductCart = (id)=>{
      const cartProductsCopy =  [...cartProducts]
      const indexProduct = cartProductsCopy.findIndex((item) => item.id === id)
      cartProductsCopy.splice( indexProduct, 1 );
      setCartProducts(cartProductsCopy)
      localStorage.setItem("carrito", JSON.stringify(cartProductsCopy));
    }

    const addQuantity = (id)=>{
      const cartProductsCopy =  [...cartProducts]
      const indexProduct = cartProductsCopy.findIndex((item) => item.id === id)
      cartProductsCopy[indexProduct].cantidad += 1
      setCartProducts(cartProductsCopy)
      localStorage.setItem("carrito", JSON.stringify(cartProductsCopy));
    }

    const subtractQuantity = (id)=>{
      const cartProductsCopy =  [...cartProducts]
      const indexProduct = cartProductsCopy.findIndex((item) => item.id === id)
      cartProductsCopy[indexProduct].cantidad -= 1
      setCartProducts(cartProductsCopy)
      localStorage.setItem("carrito", JSON.stringify(cartProductsCopy));
    }

  return (
    <CartContext.Provider value={{cartProducts,addProductCart,deleteProductCart,addQuantity,subtractQuantity}}>
        {children}
    </CartContext.Provider>
  )
}
