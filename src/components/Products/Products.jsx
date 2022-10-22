import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../utils/firebase/firebase'

export const Products = () => {

    const [productos, setProductos] = useState([])

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
        setProductos(result)
    }

    return (
        <>
            <div className="row">
                <h1>Productos</h1>
                <hr></hr>
                {
                    productos.map((item) =>
                        <div className="col-3" key={item.id}>
                            <ItemListContainer product={item} />
                        </div>
                    )
                }
            </div>
        </>
    )
}
