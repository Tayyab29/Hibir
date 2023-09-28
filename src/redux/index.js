import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login";
import mainViewSlice from "./main-view";

const rootReducer = combineReducers({
  // Data States
  login: loginReducer,
  mainView: mainViewSlice,
});

const reducer = (state, action) => {
  return rootReducer(state, action);
};

export const makeStore = () =>
  configureStore({
    reducer,
  });

export const store = makeStore();
