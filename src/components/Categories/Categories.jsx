import { useParams } from "react-router-dom"
import { products } from "../../Db/db"
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'

export const Categories = () => {
    const { categoria } = useParams()
    
    return (
        <>
            <div className="row">
                <h1 className="ms-4">{categoria.toUpperCase()}</h1>
                <hr></hr>
                {
                    products.map((item) => item.categoria === categoria &&
                        <div className="col-3" key={item.id}>
                            <ItemListContainer product={item} />
                        </div>
                    )
                }
            </div>
        </>
    )
}
