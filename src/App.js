import { Routes, Route , Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ContactPage } from './components/Pages/ContactPage'
import { ProductsPage } from './components/Pages/ProductsPage'
import { HomePage } from './components/Pages/HomePage'





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
            <Route path="products/:dog" element={<ProductsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="/*" element={<Navigate to="products" />} />            
          </Routes>
        </div>
      </div>
    </>

  );
}


