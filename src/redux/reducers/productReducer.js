import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_PRODUCTS,
} from "../constants/actionTypes";

const productsState = {
  products: [{ id: 1, title: "Ebun", category: "programmer" }],
};

export default function productReducer(
  state = productsState,
  { type, payload }
) {
  switch (type) {
    case SET_PRODUCTS:
      return state;
    default:
      return state;
  }
}
