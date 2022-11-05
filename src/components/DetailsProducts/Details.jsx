import { Count } from '../Count/Count'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContex'
import { Link } from "react-router-dom";



export const Details = ({ product }) => {

    const { addProductCart } = useContext(CartContext)
    const [cant, setCant] = useState(1)
    const [checkout, setCheckout] = useState(false);


    const cantidad = (count) => {
        setCant(count)
    }

    const buttonVisible = ()=>{
        setCheckout(true)
    }

    return (
        <>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title h1 text-center mb-4 border bg-warning py-2 rounded-3">
                                {product.title}
                            </h5>
                            <img
                                src={product.image}
                                className="card-img-top w-75"
                                alt={product.title}
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title h4 bg-warning  p-2 rounded">
                                Descripción
                            </h5>
                            <p className="card-text py-4">{product.descripcion}</p>
                            <hr></hr>
                            <h5 className="card-title h4 bg-warning p-2 rounded mb-3">
                                Precio
                            </h5>
                            <span className="card-text  "></span>
                            <span className="card-text h3 text-danger ms-3">
                                ${product.precio}
                            </span>
                            <hr></hr>
                            <h5 className="card-title h4 bg-warning p-2 rounded">
                                Cantidad
                            </h5>
                            <Count onCant={(valor) => cantidad(valor)} valorInicial={1} />
                            <hr></hr>
                            <button className="btn btn-success py-1 mt-2 me-2" onClick={() => addProductCart(product, cant)}>
                                <span className="fs-4  " onClick={buttonVisible}>+<i className="bi bi-cart3 fs-5"></i></span>
                            </button>
                            <Link to="products ">
                                <button className="btn btn-secondary py-1 mt-2" >
                                    <span className="fs-4 ">Seguir comprando</span>
                                </button>
                            </Link>
                            <br></br> <br></br>
                            {
                                checkout &&
                                <Link to="/carrito">
                                    <button className="btn btn-danger py-1 mt-2" >
                                        <span className="fs-4 ">Finalizar compra</span>
                                    </button>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
