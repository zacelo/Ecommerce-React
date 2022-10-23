import '../isLoading/isLoading.css'

export const IsLoading = () => {



    return (
        <>
          <p className="text-center mt-3 h4">Cargando...</p>
            <div id="preloader">
                <div id="loader"></div>
            </div>
        </>
    )
}
