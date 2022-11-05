
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import { EmptyCart } from "./EmptyCart";
import { useAlert } from "../../hooks/useAlert";

import './Cart.css'
//Firebase
import { db } from '../../utils/firebase/firebase'
import { collection, addDoc } from "firebase/firestore";


export const Cart = () => {
    const { alertOrder } = useAlert()
    const { cartProducts, deleteProductCart, addQuantity, subtractQuantity, resetCart } = useContext(CartContext);

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        address:'',
        tel:''
    })

    const total = cartProducts.reduce((acumulador, item) => {
        return acumulador + item.precio * item.cantidad
    }, 0)

    const formChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }


    const sendOrder = async () => {
        const order = {
            datosUsuarios: { ...formState },
            total,
            compra: cartProducts
        }

        try {
            const docRef = await addDoc(collection(db, "compras"), order);
            alertOrder("Compra realizada con exito Id: " + docRef.id);
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
                            <div className='col-8 border p-0'>
                                <table className="table ">
                                    <thead className="bg-dark text-white">
                                        <tr className="text-center ">
                                            <th >Imagen</th>
                                            <th >Nombre</th>
                                            <th>Precio</th>
                                            <th className="pe-5">Cantidad</th>
                                            <th className="text-start">Sub total</th>
                                            <th ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartProducts.map(item =>
                                                <tr key={item.id}>
                                                    <th ><img className="imag img-thumbnail" src={item.image} alt={item.title}></img></th>
                                                    <td className=" fs-4 align-middle">{item.title}</td>
                                                    <td className=" fs-4 align-middle">$ {item.precio}</td>
                                                    <td className=" fs-4 align-middle">
                                                        <button className=" btn  m-2 align-middle" onClick={() => subtractQuantity(item.id)}><i className="bi bi-caret-left-fill fs-4"></i></button>
                                                        {item.cantidad}
                                                        <button className=" btn  m-2 " onClick={() => addQuantity(item.id)}><i className="bi bi-caret-right-fill fs-4"></i></button>
                                                    </td>
                                                    <td className=" fs-4 align-middle">$ {item.cantidad * item.precio}</td>
                                                    <td ><i className="bi bi-trash3-fill text-danger fs-4 btn mt-3" onClick={() => deleteProductCart(item.id)} ></i></td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                                <div className="text-end mb-3">
                                    <span className=" me-1 h3 border border-3 rounded-3 py-1 px-3">Total:  $ {total}</span>
                                </div>
                               

                            </div>
                            <div className="col-4 border ps-3">
                                <h3 className="bg-dark text-white py-1 text-center">Formulario de compra</h3>
                                <form className="ms-4">
                                    <div className="form-group mb-3">
                                        <label className=" h5 mt-2">Nombre:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombre..."
                                            name='name'
                                            onChange={formChange}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="h5">Dirección:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Dirección..."
                                            name='address'
                                            onChange={formChange}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="h5">Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email..."
                                            name='email'
                                            onChange={formChange}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="h5">Teléfono:</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Teléfono..."
                                            name='tel'
                                            onChange={formChange}
                                        />
                                    </div>
                                    <div className="text-end">
                                    
                                    <button
                                        type="button"
                                        className="btn btn-success mt-2 mb-2 px-5 fs-5"
                                        onClick={sendOrder}>
                                        Comprar
                                    </button>
                                    
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>

            }
        </>
    )
}
