import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { useGetProducts } from "../../hooks/useGetProducts";
import { IsLoading } from '../isLoading/IsLoading'

export const Products = () => {

    const { products, loading } = useGetProducts();

    return (
        <>
            <div className="row">
            <div>
                <h1 className="text-center bg-warning py-1 mb-3">Todos los productos</h1>
                
                </div>
                {
                    loading
                        ?
                        <IsLoading />
                        :
                        products.map((item) =>
                            <div className="col-3 my-1" key={item.id}>
                                <ItemListContainer product={item} />
                            </div>
                        )
                }
            </div>
        </>
    )
}
