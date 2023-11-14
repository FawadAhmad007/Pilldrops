import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

export const AuthSilce = createSlice({
  name: "auth",
  initialState,
  reducers: {
    ADD_TOKKEN: (state, action) => {
      state.token = action.payload;
    },
    REMOVE_TOKKEN: (state) => {
      state.token = null;
    },
  },
});

export const { ADD_TOKKEN, REMOVE_TOKKEN } = AuthSilce.actions;

export default AuthSilce.reducer;
