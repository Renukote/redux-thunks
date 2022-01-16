import { SEARCH_ERROR, SEARCH_LOADING, SEARCH_SUCCESS } from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  userData: "",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SEARCH_LOADING:
      return { ...state, isLoading: true, isError: false, userData: "" };
    case SEARCH_SUCCESS:
      return { ...state, isLoading: false, isError: false, userData: payload };
    case SEARCH_ERROR:
      return { ...state, isLoading: false, isError: true, userData: "" };
    default:
      return state;
  }
};
