import "./card.css"

export const Card = ({product}) => {
   const {title,image,descripcion,precio} = product 
   
    const anadir = (product )=> {
      alert(product.title)     
    }
   
    return (
        <>
            <div className="card" >
                <img src={image} className="card-img-top" alt="..."></img>
                    <div className="card-body">                       
                        <h4 className="card-title">{title}</h4>
                        <h5 className="text-danger">Precio: ${precio}</h5>
                        <p className="card-text">{descripcion}</p>
                        <button className="btn btn-primary" onClick={()=>anadir(product)}>Añadir al Carrito</button>
                    </div>
            </div>
        </>

    )
}
