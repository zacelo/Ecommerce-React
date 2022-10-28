import { useContext } from "react";
import { CartContext } from "../../context/CartContex";

export const Cart = () => {

    const { cartProducts } = useContext(CartContext);
  
   const total = cartProducts.reduce((acumulador, item)=>{
    
    return  acumulador +  item.precio * item.cantidad
  },0)    
  
    return (
        <>

            <table className="table">
                <thead>
                    <tr>
                        <th >Imagen</th>
                        <th >Nombre</th>
                        <th>Precio</th>
                        <th >Cantidad</th>
                        <th >Total</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        cartProducts.map(item =>
                            <tr key={item.id}>
                                <th><img className="w-25" src={item.image} alt={item.title}></img></th>
                                <td>{item.title}</td>
                                <td>{item.precio}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.cantidad * item.precio}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <h2>Total {total}</h2>
        </>
    )
}
