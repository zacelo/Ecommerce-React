
import { useParams } from "react-router-dom"
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'
import { IsLoading} from '../isLoading/IsLoading'

import { useGetCategoty } from "../../hooks/useGetCategoty";


export const Categories = () => {

    const { categoria } = useParams()

    const { products, loading } = useGetCategoty(categoria)  
   
    
    return (
        <>
            <div className="row p-3">
                <div>
                <h1 className="text-center bg-warning py-1 mb-3 titles rounded-pill">Categoría {categoria}</h1>                
                </div>            
                {
                    loading 
                    ?
                    <IsLoading/>
                    :
                    products.map((item) => 
                        <div className="col-md-6 col-lg-3" key={item.id}>
                            <ItemListContainer product={item} />
                        </div>
                    )
                }
            </div>
        </>
    )
}
