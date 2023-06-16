import Header from "./components/Header";
import Product from "./components/Product";
import Cartitems from "./components/Cartitems";
import { mobiles } from "./components/mobilelist";
import "./components/Style.css";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="product">
        {mobiles.map((items, index) => (
          <Product key={index} item={items} />
        ))}
      </div>
      <div className="cartitems">
        <Cartitems />
      </div>
    </>
  );
}
export default App;
