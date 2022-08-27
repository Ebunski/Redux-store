import { SET_PRODUCTS } from "../constants/actionTypes";

const initialState = {
  productsList: [],
};

export default function productReducer(
  state = initialState,
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
