

import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import { EmptyCart } from "./EmptyCart";
import { useAlert } from "../../hooks/useAlert";
import { FormCart } from "./FormCart";
import { TableCart } from "./TableCart";

import './Cart.css'
//Firebase
import { db } from '../../utils/firebase/firebase'
import { collection, addDoc } from "firebase/firestore";


export const Cart = () => {
    const { alertOrder } = useAlert()
    const { cartProducts, deleteProductCart, addQuantity, subtractQuantity, resetCart } = useContext(CartContext);


    const total = cartProducts.reduce((acumulador, item) => {
        return acumulador + item.precio * item.cantidad
    }, 0)  


   
    const sendOrder = async (data)=>{       
        const order = {
            datosUsuarios: { data},
            total,
            compra: cartProducts
        }

        try {
            const docRef = await addDoc(collection(db, "compras"), order);
            alertOrder(docRef.id);
            resetCart()

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <>
            {
                cartProducts.length === 0
                    ?                   
                     <EmptyCart />                  
                    :                   
                    <div className="container">                      
                        <div className="row">
                           <TableCart values={{cartProducts, deleteProductCart, addQuantity, subtractQuantity,total}}/>       
                           
                           <FormCart onSendOrder={(data)=>sendOrder(data)}/>                       
                        </div>
                    </div>
            }
        </>
    )
}
