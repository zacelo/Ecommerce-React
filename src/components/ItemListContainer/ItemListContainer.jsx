import "../ItemListContainer/ItemListContainer.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContex";

export const ItemListContainer = ({ product }) => {
    const { id, title, image, precio } = product

    const { addProductCart } = useContext(CartContext)

    return (
        <>

            <div className="card " >
                <div >
                    <img src={image} className="card-img-top imagesList" alt="..."></img>
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <h5 className="text-danger">Precio: ${precio}</h5>
                        <div className='border text-center border-2 '>
                            <Link to={`/detalle/${id}`} className="btn btn-secondary my-1" > <i className="bi bi-eye-fill fs-5"></i></Link>
                            <button className="btn btn-danger my-1 ms-2 fs-5 " onClick={() => addProductCart(product, product.cantidad)}>+<i className="bi bi-cart3 fs-5"></i></button>
                        </div>

                    </div>
                </div>

            </div>
        </>

    )
}
