import { MenuNavegacion } from "./components/navBar/MenuNavegacion.jsx";
import { Card } from "./components/card/card"
import { products } from "./Db/db"





export function App() { 
 
 
  return (
    <div className="App">
      <div className="container mt-2">
        <MenuNavegacion />
        <hr></hr>
        <div className="row">
          {
            products.map((item) =>
              <div className="col-3" key={item.id}>
                <Card product={item} />
              </div>
            )
          }

        </div>
      </div>
    </div>
  );
}


