import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "./actionTypes";

export const registerLoading = () => {
  return {
    type: REGISTER_LOADING,
  };
};

export const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
  };
};

export const registerFailure = (err) => {
  return {
    type: REGISTER_ERROR,
    payload: err,
  };
};

export const newRegister = (userData) => (dispatch) => {
  dispatch(registerLoading());

  fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("registration response", res);
      res.error
        ? dispatch(registerFailure(res.message))
        : dispatch(registerSuccess());
    })
    .catch((e) => {
      dispatch(registerFailure(e.message));
    });
};
