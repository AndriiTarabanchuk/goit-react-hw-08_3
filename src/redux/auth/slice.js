import { createSlice } from "@reduxjs/toolkit";
import {
  getMeThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from "./operations";

const handlePending = (state) => {
  // state.auth.isRefreshing = true;
};

const handleRejected = (state, action) => {
  // state.auth.isRefreshing = false;
  state.auth.error = action.payload;
};
const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
};
const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(getMeThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.user = action.payload.user;
        state.user.email = action.payload.email;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        return initialState;
      })
      .addCase(registerThunk.pending, handlePending)
      .addCase(loginThunk.pending, handlePending)
      .addCase(logoutThunk.pending, handlePending);
  },
});
export const authReducer = slice.reducer;
