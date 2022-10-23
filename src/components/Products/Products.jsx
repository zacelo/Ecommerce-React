import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { useGetProducts } from "../../hooks/useGetProducts";

export const Products = () => {

    const state = useGetProducts()
    console.log(state)

    return (
        <>
            <div className="row">
                <h1>Productos</h1>
                <hr></hr>
                {
                    state.map((item) =>
                        <div className="col-3" key={item.id}>
                            <ItemListContainer product={item} />
                        </div>
                    )
                }
            </div>
        </>
    )
}
