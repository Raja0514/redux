import { ADD_TO_CART,REMOVE_FROM_CART } from "./constant";
export function addtocart(items) {
  return {
    type: ADD_TO_CART,
    data: items,
  };
}
  export function removecart(items) {
    return {
      type: REMOVE_FROM_CART,
      data: items,
    };
  } 


