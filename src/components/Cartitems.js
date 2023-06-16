import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Cartitems() {
  const [items, setitems] = useState([]);
  const Cartitems = useSelector((state) => state.reducer);
  //console.log("new card items", Cartitems);
  useEffect(() => {
    setitems(Cartitems);
  }, [items]);
  return (
    <>
      <h2>Cart Items</h2>
      <div className="itembox">
        {items.map((list, index) => {
          return (
            <>
              <div className="smallbox">
                <p key={index}>{list.name}</p>

                <p>{list.price}</p>
                <p>{list.model}</p>
                <p>
                  <img src={list.url} width="100px" height="100px" alt=" pic" />
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Cartitems;
