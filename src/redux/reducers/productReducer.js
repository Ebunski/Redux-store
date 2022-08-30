import { SET_PRODUCTS, FILTER_PRODUCTS } from "../constants/actionTypes";

const initialState = {
  productsList: [],
  filteredList: [],
};

export default function productReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case SET_PRODUCTS:
      return {
        productsList: payload.products,
        filteredList: payload.products,
      };
    case FILTER_PRODUCTS:
      if (payload.category === "all")
        return {
          ...state,
          filteredList: state.productsList,
        };
      return {
        ...state,
        filteredList: state.productsList.filter(
          (x) => x.category === payload.category
        ),
      };
    default:
      return state;
  }
}
