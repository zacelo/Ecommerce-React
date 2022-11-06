import '../inicio/BanerInicio.css'
import { Link } from "react-router-dom";

export const BanerInicio = () => {
  return (
    <>

      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container  ">
          <div className="row align-items-center ">
            <div className="col-lg-6  text-lg-start">
              <div className='d-flex justify-content-center '>
                <div className='alignButton'>
                
                </div>
                
              </div>

            </div>

            <div className="col-lg-6 text-center  overflow-hidden">

              <div className=''>
                <img className="img-fluid img" src="https://genesistoxical.com/wp-content/uploads/2021/05/Hueso_animado_png.png" alt="" />
                <br></br>
                <Link to='products' >
                  <button className='btn btn-danger border border-3 fs-4  btnAbout px-5 alignButton'>PRODUCTOS</button>
                </Link>
              </div>


            </div>
          </div>
        </div>
      </div>

    </>
  )
}
