import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_PRODUCTS,
} from "../constants/actionTypes";
export function setProducts(products) {
  return { type: SET_PRODUCTS, payload: { products } };
}

export function addProduct(products) {
  return { type: ADD_PRODUCT, payload: { products } };
}

export function removeProduct(products) {
  return { type: REMOVE_PRODUCT, payload: { products } };
}
