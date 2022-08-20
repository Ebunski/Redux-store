import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  DECREASE_ITEM,
} from "../constants/actionTypes";

const productsState = {
  cartItems: [],
  totalPrice: 0,
  totalAmount: 0,
};

export default function productReducer(state = productsState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    case DECREASE_ITEM:
      return {
        ...state,
      };
    default:
      return state;
  }
}
