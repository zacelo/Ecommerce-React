import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { useGetProducts } from "../../hooks/useGetProducts";
import { IsLoading } from '../isLoading/IsLoading'

export const Products = () => {
    const { products, isLoading } = useGetProducts()
       
    return (
        <>
            <div className="row">
                {
                    isLoading
                        ?
                       <IsLoading/>
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
