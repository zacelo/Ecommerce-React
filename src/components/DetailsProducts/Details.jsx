import { Count } from '../Count/Count'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContex'
import { Link } from "react-router-dom";



export const Details = ({ product }) => {
   
    const {addProductCart} = useContext(CartContext)
    const [cant, setCant] = useState(1)    
    
    const cantidad = ( count )=>{
        
        setCant( count )
    }
    
    return (
        <>      
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title h1 text-center text-white mb-4 border bg-dark py-2 rounded-3">
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
                            <h5 className="card-title h4 bg-dark text-white p-2 rounded">
                                Descripción
                            </h5>
                            <p className="card-text py-4">{product.descripcion}</p>
                            <hr></hr>
                            <h5 className="card-title h4 bg-dark text-white p-2 rounded mb-3">
                                Precio
                            </h5>
                            <span className="card-text  "></span>
                            <span className="card-text h3 text-danger ms-3">
                                ${product.precio}
                            </span>
                            <hr></hr>
                            <h5 className="card-title h4 bg-dark text-white p-2 rounded">
                                Cantidad
                            </h5>
                            <Count onCant={(valor) => cantidad(valor)} valorInicial={1}/>
                            <hr></hr>
                            <Link to="products">
                            <button className="btn btn-primary py-0 mt-2" onClick={()=>addProductCart(product,cant)}>
                                <i className="bi bi-cart-check-fill fs-3"></i>
                                <span className="fs-3 ms-2"> + </span>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
