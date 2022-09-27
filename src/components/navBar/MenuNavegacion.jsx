import { Cart } from '../cart/cart.jsx'
import './MenuNavegacion.css'

export const MenuNavegacion = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light " >
                <div className="container ">
                    <img src='https://cdn-icons-png.flaticon.com/512/64/64431.png' className='image ms-3' alt=''></img>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ">
                                <li className="nav-item ">
                                    <a className="nav-link fs-5 mx-2" href="/" aria-current="page">Inicio</a>
                                </li>

                                <li className="nav-item dropdown fs-5 mx-2">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorías
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item " href="/">Perros</a></li>
                                        <li><a className="dropdown-item " href="/">Gatos</a></li>

                                        <li><a className="dropdown-item" href="/">Accesorios</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link fs-5 mx-2" >Contacto</a>
                                </li>


                            </ul>
                            
                        </div>
                    </div>

                    <div>
                        <Cart />
                    </div>
                </div>
            </nav>

        </>

    )
}
