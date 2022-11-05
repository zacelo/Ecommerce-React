import { useEffect, useState } from "react";

//firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from '../utils/firebase/firebase'
//--------

export const useGetProducts = () => {   

    const [estado, setEstado] = useState({
        products:[],
        loading:true
    })
    
    useEffect(() => {
        getProducts()         
    }, [])

    const getProducts = async () => {         
       
        const refProducts = collection(db, "productos")
        const response = await getDocs(refProducts);
        const documents = response.docs
      
        const result = documents.map(item => {
           
            return ({
                ...item.data(),
                id: item.id
            })
        })      
   
            setEstado({
                products:result,
                loading:false
            })
      
       
    }
    
    const data = {...estado}
   
    return data    
}