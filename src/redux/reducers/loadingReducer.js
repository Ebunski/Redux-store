import { FETCH_STATUS, LOADING_STATUS } from "../constants/actionTypes";

const initialState = {
  state: false,
  error: "",
};

export default function loadingReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case LOADING_STATUS:
      return {
        ...state,
        state: payload.status,
      };
    case FETCH_STATUS:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
}
