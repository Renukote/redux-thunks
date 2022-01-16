import { SEARCH_ERROR, SEARCH_LOADING, SEARCH_SUCCESS } from "./actionTypes";

export const searchLoading = () => {
  return { type: SEARCH_LOADING };
};

export const searchSuccess = (data) => {
  return { type: SEARCH_SUCCESS, payload: data };
};

export const searchFailure = (err) => {
  return { type: SEARCH_ERROR, payload: err };
};

export const userSearch = (query) => (dispatch) => {
  dispatch(searchLoading());

  fetch(`https://api.github.com/users/${query}`)
    .then((res) => res.json())
    .then((res) => {
      console.log("github search response", res);

      if (res.error) dispatch(searchFailure(res.message));
      else dispatch(searchSuccess(res));
    })
    .catch((e) => dispatch(searchFailure(e.message)));
};
