

export const TableCart = ({values}) => {

    const {cartProducts, deleteProductCart, addQuantity, subtractQuantity,total}=values
  
  return (
    <div className='col-8 border p-0'>
    <table className="table ">
        <thead className="bg-dark text-white">
            <tr className="text-center ">
                <th >Imagen</th>
                <th >Nombre</th>
                <th>Precio</th>
                <th className="pe-5">Cantidad</th>
                <th className="text-start">Sub total</th>
                <th ></th>
            </tr>
        </thead>
        <tbody>
            {
                cartProducts.map(item =>
                    <tr key={item.id}>
                        <th ><img className="imag img-thumbnail" src={item.image} alt={item.title}></img></th>
                        <td className=" fs-4 align-middle">{item.title}</td>
                        <td className=" fs-4 align-middle">$ {item.precio}</td>
                        <td className=" fs-4 align-middle">
                            <button className=" btn  m-2 align-middle" onClick={() => subtractQuantity(item.id)}><i className="bi bi-caret-left-fill fs-4"></i></button>
                            {item.cantidad}
                            <button className=" btn  m-2 " onClick={() => addQuantity(item.id)}><i className="bi bi-caret-right-fill fs-4"></i></button>
                        </td>
                        <td className=" fs-4 align-middle">$ {item.cantidad * item.precio}</td>
                        <td ><i className="bi bi-trash3-fill text-danger fs-4 btn mt-3" onClick={() => deleteProductCart(item.id)} ></i></td>
                    </tr>
                )
            }
        </tbody>
    </table>
    <div className="text-end mb-3">
        <span className=" me-1 h3 border border-3 rounded-3 py-1 px-3">Total:  $ {total}</span>
    </div>
</div>
  )
}
