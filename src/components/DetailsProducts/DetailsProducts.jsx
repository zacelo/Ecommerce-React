import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Count } from "../Count/Count";

import { db } from "../../utils/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export const DetailsProducts = () => {
  const { id } = useParams();

  const [detailProduct, setDetailProduct] = useState({})

  useEffect(() => {    
    getDetail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDetail = async () => {
    const documentRef = doc(db, "productos", id);
    const respuesta = await getDoc(documentRef);

    if (respuesta.exists()) {
      const product = {
        ...respuesta.data(),
        id:respuesta.id
      }
     setDetailProduct(product)    
    } else {
      
      console.log("Documento inexistente");
    }
  };
  return (
    <>
    
       <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title h1 text-center text-white mb-4 border bg-dark py-2 rounded-3">
                {detailProduct.title}
              </h5>
              <img
                src={detailProduct.image}
                className="card-img-top w-75"
                alt={detailProduct.title}
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
              <p className="card-text py-4">{detailProduct.descripcion}</p>
              <hr></hr>
              <h5 className="card-title h4 bg-dark text-white p-2 rounded mb-3">
                Precio
              </h5>
              <span className="card-text  "></span>
              <span className="card-text h3 text-danger ms-3">
                ${detailProduct.precio}
              </span>
              <hr></hr>
              <h5 className="card-title h4 bg-dark text-white p-2 rounded">
                Cantidad
              </h5>
              <Count />
              <hr></hr>
              <button className="btn btn-primary py-0 mt-2">
                <i className="bi bi-cart-check-fill fs-3"></i>{" "}
                <span className="fs-3 ms-2"> + </span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};
