import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Style.css";
function Header() {
  const [items, setitems] = useState([]);
  //console.log("useitems", items);
  const carditems = useSelector((state) => state.reducer);
  //console.log("useselector items", carditems);
  useEffect(() => {
    setitems(carditems.length);
  }, [carditems]);
  return (
    <>
      <div className="header">
        <div>
          <h1>Mobile Shops</h1>
        </div>
        <div style={{ margin: "10px" }}>
          <button variant="default" className="button">
            Cart: {items}
          </button>
        </div>
      </div>
    </>
  );
}
export default Header;
