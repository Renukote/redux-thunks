import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_LOADING:
      return { ...state, isLoading: true, isError: false, isSuccess: false };
    case REGISTER_SUCCESS:
      return { ...state, isLoading: false, isError: false, isSuccess: true };
    case REGISTER_ERROR:
      return { ...state, isLoading: false, isError: payload, isSuccess: false };
    default:
      return state;
  }
};
