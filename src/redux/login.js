import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = loginSlice.actions;
export const loginState = (state) => state.login;

export default loginSlice.reducer;
