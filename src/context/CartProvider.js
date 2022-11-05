import { useState } from "react";
import { CartContext } from "./CartContex"

import { useLocal } from "../hooks/useLocal";
import { useAlert } from "../hooks/useAlert"


export const CartProvider = ({ children }) => {

  const {alertAddProduct} =useAlert()
  const {localstorage, addLocal}=useLocal() 

  const [cartProducts, setCartProducts] = useState(localstorage);

  const existe = (id) => {
    const productoExiste = cartProducts.some((item) => item.id === id)
    return productoExiste
  }

  const addProductCart = (producto, cantidad) => {
    const cartProductsCopy = [...cartProducts]

    if (existe(producto.id)) {
      const cartProductsCopy = [...cartProducts]
      const indexProduct = cartProductsCopy.findIndex((item) => item.id === producto.id)
      cartProductsCopy[indexProduct].cantidad += cantidad
      setCartProducts(cartProductsCopy)

      addLocal(cartProductsCopy)
      alertAddProduct('Producto agregado con exito ')

    } else {
      const productoMasCantidad = {
        ...producto,
        cantidad
      }

      cartProductsCopy.push(productoMasCantidad)
      setCartProducts(cartProductsCopy)
      
      alertAddProduct ('Agregado con exito ')
      addLocal(cartProductsCopy)
    }
  }

  const deleteProductCart = (id) => {
    const cartProductsCopy = [...cartProducts]
    const indexProduct = cartProductsCopy.findIndex((item) => item.id === id)
    cartProductsCopy.splice(indexProduct, 1);
    setCartProducts(cartProductsCopy)

    addLocal(cartProductsCopy)
  }

  const addQuantity = (id) => {
    const cartProductsCopy = [...cartProducts]
    const indexProduct = cartProductsCopy.findIndex((item) => item.id === id)
    cartProductsCopy[indexProduct].cantidad += 1
    setCartProducts(cartProductsCopy)
    addLocal(cartProductsCopy)
  }

  const subtractQuantity = (id) => {
    const cartProductsCopy = [...cartProducts]
    const indexProduct = cartProductsCopy.findIndex((item) => item.id === id)
   if( cartProductsCopy[indexProduct].cantidad > 1){
    cartProductsCopy[indexProduct].cantidad -= 1
    setCartProducts(cartProductsCopy)
    addLocal(cartProductsCopy)
   }   
  }
   const resetCart = ( )=>{
    setCartProducts([])
    addLocal([])
   }
  return (
    <CartContext.Provider value={{ cartProducts, addProductCart, deleteProductCart, addQuantity, subtractQuantity,resetCart }}>
      {children}
    </CartContext.Provider>
  )
}