
import { useParams } from "react-router-dom"
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'
import { IsLoading} from '../isLoading/IsLoading'

import { useGetCategoty } from "../../hooks/useGetCategoty";


export const Categories = () => {

    const { categoria } = useParams()

    const { products, loading } = useGetCategoty(categoria)  
   
    
    return (
        <>
            <div className="row">
                <h1 className="ms-4">{categoria.toUpperCase()}</h1>
                <hr></hr>
                {
                    loading 
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
