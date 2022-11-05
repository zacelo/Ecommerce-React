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

 const alertOrder = ( mje )=>{
  Swal.fire({
    icon: 'success',
    title: mje,
    showConfirmButton: true,
    confirmButtonColor: 'rgb(226, 38, 38)',    
  }).then(()=>{
    window.location="/"
  })  
}
  return {alertAddProduct,alertOrder}  
}
