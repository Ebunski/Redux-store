import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import productReducer from "./productReducer";
import detailsReducer from "./detailsReducer";
import cartReducer from "./cartReducer";

export const allReducers = combineReducers({
  products: productReducer,
  loading: loadingReducer,
  details: detailsReducer,
  cart: cartReducer,
});
