import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { products } from "../../Db/db"

export const ProductsPage = () => {
  return (
    <>
      
    
       <div className="row">
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
