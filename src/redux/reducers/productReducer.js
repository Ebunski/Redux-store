import { SET_PRODUCTS, FILTER_PRODUCTS } from "../constants/actionTypes";

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
        productsList: payload.products,
      };
    case FILTER_PRODUCTS:
      return {
        productsList: state.productsList.filter(
          (x) => x.category === payload.item
        ),
      };
    default:
      return state;
  }
}
