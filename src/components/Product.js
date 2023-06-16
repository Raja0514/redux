import { useDispatch, useSelector } from "react-redux";

import { addtocart, removecart } from "../redux/action.js";

import { useEffect, useState } from "react";

import "./Style.css";

function Product(props) {

  const dispatch = useDispatch();

  
  const [isAdd, setisAdd] = useState(false);

  const cardlist = useSelector((state) => state.reducer);

  //console.log("product items checking", cardlist);

  //console.log(props);

  const items = props.item;

  //console.log("items", items);

  function removefromcard() {
    dispatch(removecart(items.name));
  }

  function Click() {
    dispatch(addtocart(items));
  }

  useEffect(() => {
    let result = cardlist.filter((element) => {
      return element.name === items.name;
    });

    if (result.length) {
      setisAdd(true);
    } else {
      setisAdd(false);
    }
  }, [cardlist]);

  return (
    <>
      <div className="container">
        <p>Name:{items.name}</p>
        <p>Price:{items.price}</p>
        <p>Model:{items.model}</p>
        <p>
          <img alt="mobile pic" height="100px" src={items.url} />
        </p>

        {isAdd ? (
          <button className="button" onClick={() => removefromcard()}>
            Remove Cart
          </button>
        ) : (
          <button className="button" onClick={() => Click()}>
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
}
export default Product;
