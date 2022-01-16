import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";

const initState = {
  isLoading: false,
  token: "",
  isError: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { isLoading: true, isError: false, token: "" };
    case LOGIN_SUCCESS:
      return { isLoading: false, isError: false, token: payload };
    case LOGIN_ERROR:
      return { isLoading: false, isError: true, token: "" };
    default:
      return state;
  }
};
