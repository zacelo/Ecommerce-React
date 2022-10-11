import { Routes, Route , Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ContactPage } from './Pages/NosotrosPage'
import { ProductsPage } from './Pages/ProductsPage'
import { HomePage } from './Pages/HomePage'
import { CategoriesPage } from './Pages/CategoriesPage'
import { DetailProduct }  from "./Pages/DetailProductPage"
import "./App.css"



export function App() {


  return (
    <>
      <div className="App">
        <div className="container mt-2">
          <NavBar />
          <hr></hr>
          <Routes>            
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />            
            <Route path="nosotros" element={<ContactPage />} />
            <Route path="categoria/:categoria" element={<CategoriesPage/>}/>
            <Route path="detalle/:id" element={<DetailProduct/>}/>
            <Route path="/*" element={<Navigate to="products" />} />            
          </Routes>
        </div>
      </div>
    </>

  );
}


