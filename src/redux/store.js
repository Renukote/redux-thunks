import { reducer as registerReducer } from "./registration/reducer";
import { reducer as loginReducer } from "./login/reducer";
import { reducer as descriptionReducer } from "./description/reducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

const root_reducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  description: descriptionReducer,
});

export const store = createStore(
  root_reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
