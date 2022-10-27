import { useEffect, useState } from "react"

export const Count = ({ onCant, valorInicial }) => {
   
    const [cant, setCant] = useState(valorInicial)

    useEffect(() => {
        onCant(cant)
        // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, [cant])

    const aumentar = () => {
        setCant(cant + 1)
    }
    const disminuir = () => {
        if (cant < 2) return
        setCant(cant - 1)

    }
    return (
        <>
            <div className="d-flex align-items-center">
                <i className="btn bi bi-arrow-left-square-fill text-danger fs-3 " onClick={disminuir}></i>
                <h3 className=" mt-2 ">{cant}</h3>
                <i className="btn bi bi-arrow-right-square-fill text-danger fs-3 " onClick={aumentar}></i>
            </div>
        </>
    )
}
