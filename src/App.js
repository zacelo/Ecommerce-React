import { Routes, Route , Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ContactPage } from './Pages/NosotrosPage'
import { ProductsPage } from './Pages/ProductsPage'
import { HomePage } from './Pages/HomePage'
import { CategoriesPage } from './Pages/CategoriesPage'
import { DetailProduct }  from "./Pages/DetailProductPage"
import { CartPage } from './Pages/CartPage'
import "./App.css"
import { CartProvider } from "./context/CartProvider.js";
import { Footer } from "./components/Footer/Footer"


export function App() {


  return (
    <>
    <CartProvider>
      <div className="App">     
        <div className="container mt-2">
          <NavBar />
          <hr></hr>
          <div className="rutas">
          <Routes >            
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="carrito" element={<CartPage />} />            
            <Route path="nosotros" element={<ContactPage />} />
            <Route path="categoria/:categoria" element={<CategoriesPage/>}/>
            <Route path="detalle/:id" element={<DetailProduct/>}/>
            <Route path="/*" element={<Navigate to="products" />} />            
          </Routes>
          </div>
          <Footer/>
        </div>
      </div>
      </CartProvider>
    </>

  );
}


