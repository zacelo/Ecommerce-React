import '../inicio/BanerInicio.css'
import { Link } from "react-router-dom";

export const BanerInicio = () => {
  return (
    <>

      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container  ">
          <div className="row align-items-center ">
            <div className="col-lg-6 text-center text-lg-start"> </div>

            <div className="col-lg-6 text-center  overflow-hidden">
              <Link to='products'>
                <button className='btn btn-danger fs-5 mb-4 btnAbout'>PRODUCTOS</button>
              </Link>
              <div className=''>
                <img className="img-fluid img" src="https://genesistoxical.com/wp-content/uploads/2021/05/Hueso_animado_png.png" alt="" />
                <img className="img-fluid " src="https://i.imgur.com/7yrYWHm.png" alt="" />
              </div>


            </div>
          </div>
        </div>
      </div>

    </>
  )
}
