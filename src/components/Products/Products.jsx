import { products } from "../../Db/db"
import { ItemListContainer } from "../ItemListContainer/ItemListContainer"

export const Products = () => {
    return (
        <>
            <div className="row">
                <h1>Productos</h1>
                <hr></hr>
                {
                    products.map((item) =>
                        <div className="col-3" key={item.id}>
                            <ItemListContainer product={item} />
                        </div>
                    )
                }
            </div>
        </>
    )
}
