
export const useLocal = () => {

    let localstorage = JSON.parse(localStorage.getItem("carrito"))
    if (localstorage === null) {
        localstorage = []
    }

    const addLocal = (cartProducts)=>{
        localStorage.setItem("carrito", JSON.stringify(cartProducts));
    }


    return {
        localstorage,
        addLocal
    }
}
