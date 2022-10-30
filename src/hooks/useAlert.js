import Swal from 'sweetalert2'

export const useAlert = () => {
  
 const alertAddProduct = ( mje )=>{
    Swal.fire({
        icon: 'success',
        title: mje,
        showConfirmButton: false,
        timer: 1500
      })
 }
  return {alertAddProduct}  
}
