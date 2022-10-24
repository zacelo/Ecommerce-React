import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { useGetProducts } from "../../hooks/useGetProducts";
import { IsLoading } from '../isLoading/IsLoading'

export const Products = () => {

    const { products, loading } = useGetProducts();

    return (
        <>
            <div className="row">
                {
                    loading
                        ?
                        <IsLoading />
                        :
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
