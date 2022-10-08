import { NavLink } from "react-router-dom";
import { CartWidget } from '../CartWidget/CartWidget.jsx'
import './NavBar.css'

export const NavBar = () => {
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
                                <NavLink
                                    className='nav-link fs-5'
                                    to={"/"} end>
                                    Inicio
                                </NavLink>
                              

                                <NavLink
                                    className='nav-link fs-5'
                                    to={"/products"}>
                                    Productos
                                </NavLink>

                               
                                <NavLink
                                    className='nav-link fs-5'
                                    to={"/contact"}>
                                    Contacto
                                </NavLink>
                                
                            </ul>

                        </div>
                        
                    </div>

                    <div>
                        <CartWidget />
                    </div>
                </div>
            </nav>

        </>

    )
}
