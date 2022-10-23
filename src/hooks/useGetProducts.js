import { useEffect, useState } from "react";

//firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from '../utils/firebase/firebase'
//--------

export const useGetProducts = () => {

    const [ products,  setProducts ] = useState([])
    const [ isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => { 

        setIsLoading(true)      
       
        const refProducts = collection(db, "productos")
        const response = await getDocs(refProducts);
        const documents = response.docs
        const result = documents.map(item => {
            return ({
                ...item.data(),
                id: item.id
            })
        })
        setProducts(result)

        setTimeout(() => {
            setIsLoading(false)
        },4000)
        
    }
    
    return {
        products,
        isLoading
    }

}