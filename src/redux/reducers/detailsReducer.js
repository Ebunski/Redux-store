import { GET_DETAILS, REMOVE_DETAILS } from "../constants/actionTypes";

export default function detailsReducer(state = {}, { type, payload }) {
  switch (type) {
    case GET_DETAILS:
      return { ...payload.details };
    case REMOVE_DETAILS: //CLEANUP
      return {};

    default:
      return state;
  }
}
