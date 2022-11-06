import '../Footer/Footer.css'
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer className="mb-5">
        <div className="container footer-content">
          <h3 className='mb-3'>Mundo Mascotas</h3>
          <span>Cuidamos lo que más te importa para que tu mascota tenga lo que necesita y merece.</span>          
          <span>El mejor lugar para tus mejores amigos.</span>
          <ul className="socials mt-3">
            <li><Link to="/"><i className="bi bi-facebook fs-2"></i></Link></li>
            <li><Link to="/"><i className="bi bi-twitter fs-2"></i></Link></li>
            <li><Link to="/"><i className="bi bi-whatsapp fs-2"></i></Link></li>
            <li><Link to="/"><i className="bi bi-instagram fs-2"></i></Link></li>            
          </ul>
        </div>
        <div className="footer-bottom">
          <p>copyright &copy;2022 <Link to="/">Zacelo-Desing</Link>  </p>
          <div className="footer-menu">
            <ul className="f-menu">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/products">Productos</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>             
            </ul>
          </div>
        </div>

      </footer>
    </>
  )
}
