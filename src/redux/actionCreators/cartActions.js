
import {
  ADD_TO_CART,
  DECREASE_ITEM,
  REMOVE_FROM_CART,
  CLEAR_CART,
  GET_TOTALS,
  SET_CART,
} from "../constants/actionTypes";


export function addProduct(obj) {
  return { type: ADD_TO_CART, payload: { ...obj, quantity: 1 } };
}

export function decreaseProduct(id) {
  return { type: DECREASE_ITEM, payload: { id } };
}

export function removeProduct(id) {
  return { type: REMOVE_FROM_CART, payload: { id } };
}

export function clearCart() {
  return { type: CLEAR_CART };
}

export function getTotals() {
  return { type: GET_TOTALS };
}

export function setCart(cart) {
  return { type: SET_CART, payload: { cart } };
}

export async function fetchRequest(dispatch) {
  const local = await JSON.parse(localStorage.getItem("cart"));
  local && dispatch(setCart(local));
  console.log(local);
}
