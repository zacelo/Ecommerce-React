import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { useGetProducts } from "../../hooks/useGetProducts";
import { IsLoading } from '../isLoading/IsLoading'

export const Products = () => {

    const { products, loading } = useGetProducts();

    return (
        <>
            <div className="row  p-3">
            <div>
                <h1 className="text-center bg-warning py-1 mb-3 titles rounded-pill">Todos los productos</h1>
                
                </div>
                {
                    loading
                        ?
                        <IsLoading />
                        :
                        products.map((item) =>
                            <div className="col-md-6 col-lg-3 my-2 " key={item.id}>
                                <ItemListContainer product={item} />
                            </div>
                        )
                }
            </div>
        </>
    )
}
