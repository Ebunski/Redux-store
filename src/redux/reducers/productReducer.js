import { SET_PRODUCTS } from "../constants/actionTypes";

const productsState = {
  productsList: [],
};

export default function productReducer(
  state = productsState,
  { type, payload }
) {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productsList: payload.products,
      };
    default:
      return state;
  }
}
