import {
  SET_PRODUCTS,
  FETCH_STATUS,
  GET_DETAILS,
  REMOVE_DETAILS,
  LOADING_STATUS,
  FILTER_PRODUCTS,
} from "../constants/actionTypes";
import axios from "axios";

//actions to change state
export function setProducts(products) {
  return { type: SET_PRODUCTS, payload: { products } };
}
export function filterProducts(category) {
  return { type: FILTER_PRODUCTS, payload: { category } };
}

export function setLoading(status) {
  return { type: LOADING_STATUS, payload: { status } };
}

export function setError(error) {
  return { type: FETCH_STATUS, payload: { error } };
}

export function setDetails(details) {
  return { type: GET_DETAILS, payload: { details } };
}
export function removeDetails() {
  return { type: REMOVE_DETAILS };
}

//thunk middleware allows us to return a function not just an object of action - so we can use dispatch

//makes request
export function fetchProducts(dispatch) {
  async function fetcher(dispatch) {
    try {
      dispatch(setLoading(true));
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  }

  fetcher(dispatch);
}
