import { FETCH_ERROR, FETCH_START } from "../constants/actionTypes";

const loadingState = {
  state: false,
  error: "",
};

export default function loadingReducer(
  state = loadingState,
  { type, payload }
) {
  switch (type) {
    case FETCH_START:
      return {
        state: true,
        error: "",
      };
    case FETCH_ERROR:
      console.log(payload);
      return {
        state: false,
        error: payload.error,
      };
    default:
      return state;
  }
}
