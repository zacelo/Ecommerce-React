import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//import { products } from "../../Db/db"
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'

//Firebase
import { db } from '../../utils/firebase/firebase'
import { collection, query, where,getDocs } from "firebase/firestore";


export const Categories = () => {
  
   

    const { categoria } = useParams()

    const [category, setCategory] = useState([])

   

   useEffect(() => { 
    const getCategory = async () =>{
        const productsRef = collection(db, "productos");
        const consult = query(productsRef, where("categoria", "==", categoria));
        
        const respuesta = await getDocs(consult);
        
       const resultado = respuesta.docs.map(item => {
            return ({
                ...item.data(),
                id:item.id
            })
       })       
       setCategory(resultado)
    }    
    getCategory() 
   }, [categoria])

   
    
    return (
        <>
            <div className="row">
                <h1 className="ms-4">{categoria.toUpperCase()}</h1>
                <hr></hr>
                {
                    category.map((item) => 
                        <div className="col-3" key={item.id}>
                            <ItemListContainer product={item} />
                        </div>
                    )
                }
            </div>
        </>
    )
}
