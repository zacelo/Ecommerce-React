import '../Footer/Footer.css'

export const Footer = () => {
  return (
    <>
      <footer className="mb-5">
        <div className="container footer-content">
          <h3 className='mb-3'>Mundo Mascotas</h3>
          <span>Cuidamos lo que más te importa para que tu mascota tenga lo que necesita y merece.</span>          
          <span>El mejor lugar para tus mejores amigos.</span>
          <ul className="socials mt-3">
            <li><a href="/"><i className="bi bi-facebook fs-2"></i></a></li>
            <li><a href="/"><i className="bi bi-twitter fs-2"></i></a></li>
            <li><a href="/"><i className="bi bi-whatsapp fs-2"></i></a></li>
            <li><a href="/"><i className="bi bi-instagram fs-2"></i></a></li>            
          </ul>
        </div>
        <div className="footer-bottom">
          <p>copyright &copy;2022 <a href="/">Zacelo-Desing</a>  </p>
          <div className="footer-menu">
            <ul className="f-menu">
              <li><a href="/">Inicio</a></li>
              <li><a href="/products">Productos</a></li>
              <li><a href="/nosotros">Nosotros</a></li>             
            </ul>
          </div>
        </div>

      </footer>
    </>
  )
}
