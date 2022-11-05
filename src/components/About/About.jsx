import { Link } from "react-router-dom";
import "../About/About.css"


export const About = () => {
    return (
        <>
            <div className=" mb-5 popo">
                <div className="">
                    <div className="text-center mb-5">
                        <h5 className="section-title  text-center ">── Nuestro Local ── </h5>

                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-7">
                            <div className="row g-3">
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 " src="https://www.bbva.ch/wp-content/uploads/2022/05/recurso_mascotas.jpg" alt="" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 " src="https://i0.wp.com/vetplace.pe/wp-content/uploads/2021/09/tienda-mascotas-lima-peru.jpg?fit=1024%2C768&ssl=1" alt="" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 " src="https://d9b6rardqz97a.cloudfront.net/wp-content/uploads/2021/06/02152728/banner_seg-mascotas-rappi-opt-482x390.jpg" alt="" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-100" src="https://segurosexito.vteximg.com.br/arquivos/opengraphmascotas-peq.jpg?v=637949872951930000" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <h1 className="mb-4 h1About text-center"> Mundo Mascotas
                            </h1>
                            <p className="pAbout">
                                El local fue <b> inaugurado</b> en el verano de 2015, ofrece una gran gama de productos y accesorios para nuestros amiguitos.
                            </p>
                            <p className="mb-4 pAbout"><b> Mundo Mascotas </b> nació como un emprendimiento familiar, para ofrecer productos de calidad y
                                deleitar a nuestros más exigentes clientes peludos :) .
                            </p>
                            <p className="mb-4 pAbout">
                                <b>Nos enfocamos </b> en seguir creciendo día a día, para brindar lo mejor de nosotros para ustedes,
                                tratando de estar innovando constantemente con productos de calidad.
                            </p>
                            <p className="mb-4 pAbout">Gracias por los <b> comentarios </b> que nos dejan, eso nos ayuda a seguir mejorando,
                                porque nos gusta escuchar a nuestros clientes.</p>

                            <Link to='products'>
                                <button className='btn btn-danger fs-5 mb-4 btnAbout'>PRODUCTOS</button>
                            </Link>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
