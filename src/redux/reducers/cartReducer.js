import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  DECREASE_ITEM,
  GET_TOTALS,
  CLEAR_CART,
  SET_CART,
} from "../constants/actionTypes";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalAmount: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return { ...action.payload.cart };
    case ADD_TO_CART:
      const newItem = action.payload;

      const existingItem = state.cartItems.find((x) => x.id === newItem.id);
      const itemIncremented = state.cartItems.map((x) =>
        x.id === newItem.id ? { ...x, quantity: x.quantity + 1 } : x
      );

      if (existingItem)
        return {
          ...state,
          cartItems: itemIncremented,
        };
      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };

    case DECREASE_ITEM:
      const itemDecremented = state.cartItems
        .map((x) =>
          x.id === action.payload.id ? { ...x, quantity: x.quantity - 1 } : x
        )
        .filter((x) => x.quantity !== 0);
      return {
        ...state,
        cartItems: itemDecremented,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload.id),
      };

    case CLEAR_CART:
      return initialState;

    case GET_TOTALS:
      const totalAmount = state.cartItems.reduce(
        (prev, curr) => prev + curr.quantity,
        0
      );
      let totalPrice = state.cartItems.reduce(
        (prev, curr) => prev + curr.price * curr.quantity,
        0
      );

      totalPrice = new Intl.NumberFormat("en-uk", {
        maximumFractionDigits: 2,
      }).format(totalPrice);
      return {
        ...state,
        totalPrice: totalPrice,
        totalAmount: totalAmount,
      };

    default:
      return state;
  }
}
