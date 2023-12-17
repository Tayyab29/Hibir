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
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false, // Disable the thunk middleware if needed
        serializableCheck: false, // Disable serializable state check
      }),
  });

export const store = makeStore();
