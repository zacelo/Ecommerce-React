import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import { EmptyCart } from "./EmptyCart";

export const Cart = () => {

    const { cartProducts, deleteProductCart, addQuantity, subtractQuantity } = useContext(CartContext);

    const total = cartProducts.reduce((acumulador, item) => {
        return acumulador + item.precio * item.cantidad
    }, 0)

    const formCart = (e)=>{
        e.preventDefault();
       console.log(e.target[1].value)
    }

    return (
        <>
            {
                cartProducts.length === 0
                    ?
                    <EmptyCart />
                    :
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th >Imagen</th>
                                    <th >Nombre</th>
                                    <th>Precio</th>
                                    <th >Cantidad</th>
                                    <th >Total</th>
                                    <th ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartProducts.map(item =>
                                        <tr key={item.id}>
                                            <th ><img className="w-25" src={item.image} alt={item.title}></img></th>
                                            <td className=" fs-3">{item.title}</td>
                                            <td className=" fs-3">{item.precio}</td>
                                            <td className=" fs-3">
                                                <button className=" btn btn-primary m-2 " onClick={() => subtractQuantity(item.id)}>-</button>
                                                {item.cantidad}
                                                <button className=" btn btn-primary m-2 " onClick={() => addQuantity(item.id)}>+</button>
                                            </td>
                                            <td className=" fs-3 ">{item.cantidad * item.precio}</td>
                                            <td ><i className="bi bi-trash3-fill text-danger fs-3 btn " onClick={() => deleteProductCart(item.id)} ></i></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <h2 className=" fs-3 text-end">Total {total}</h2>
                        <hr></hr>
                         
                         <div className="col-6">
                         <form onSubmit={formCart}>
                            <div className="form-group">
                                <label >Nombre</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Nombre..." />
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email..." />                               
                            </div>

                            <button type="submit" className="btn btn-primary mt-2">Enviar</button>
                        </form>
                         </div>
                        
                    </div>
            }

        </>
    )
}
