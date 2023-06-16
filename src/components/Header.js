import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

function Header() {
  const [items, setitems] = useState([]);

  console.log("useitems", items);

  const carditems = useSelector((state) => state.reducer);

  console.log("useselector items", carditems);

  useEffect(() => {
    setitems(carditems.length);
  }, [carditems]);

  return (
    <>
      <div
        className="header"
      >
        <div style={{ color: "blue",marginLeft:"5px"}}>
          <h1>Mobile  Shops</h1>
        </div>

        <div style={{}}>
          <input
            type="textbox"
            placeholder="search box"
            className="input"
          />
          <button className="search" >search</button>
        </div>
        <div style={{ margin: "10px" }}>
        
          <button
            variant="default"
            style={{
              color: "white",
              background: "blue",
              padding: "10px",
              fontSize: "15px",
              border: "none",
              borderRadius: "10px",
            }}
          >
            Cart: {items}
          </button>
          
        </div>
      </div>
    </>
  );
}

export default Header;
