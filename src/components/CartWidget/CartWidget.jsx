import { CartModal } from "./cartModal"

export const CartWidget = () => {
    return (
        <>
            <button
                className="btn btn-danger"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#carrito"
            >
                <i className="bi bi-cart3 fs-4"></i>
                <span className="ms-2 h4">0</span>
            </button>

          <CartModal/>
           
           
        </>
    )
}
