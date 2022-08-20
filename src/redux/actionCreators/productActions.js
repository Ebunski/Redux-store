import {
  // ADD_PRODUCT,
  // REMOVE_PRODUCT,
  SET_PRODUCTS,
  FETCH_ERROR,
  FETCH_START,
  GET_DETAILS,
  REMOVE_DETAILS,
} from "../constants/actionTypes";
import axios from "axios";

//actions to change state
export function setProducts(products) {
  return { type: SET_PRODUCTS, payload: { products } };
}

// export function addProduct(products) {
//   return { type: ADD_PRODUCT, payload: { products } };
// }

// export function removeProduct(products) {
//   return { type: REMOVE_PRODUCT, payload: { products } };
// }

export function fetchStart() {
  return { type: FETCH_START };
}

export function fetchError(error) {
  return { type: FETCH_ERROR, payload: { error } };
}

export function setDetails(details) {
  return { type: GET_DETAILS, payload: { details } };
}
export function removeDetails(details) {
  return { type: REMOVE_DETAILS };
}

//thunk middleware allows us to return a function not just an object of action - so we can use dispatch

//makes request
export async function fetchProducts(dispatch) {
  try {
    dispatch(fetchStart);
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(setProducts(response.data));
    console.log(response.data);
  } catch (error) {
    console.log(error);
    dispatch(fetchError(error.message));
  }
}
