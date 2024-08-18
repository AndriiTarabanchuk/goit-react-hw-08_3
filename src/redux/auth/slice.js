import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, registerThunk } from "./operations";

const handlePending = (state) => {
  state.auth.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.auth.isRefreshing = false;
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
  error: null,
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
      .addCase(logoutThunk.fulfilled, (state, action) => {
        return initialState;
      })
      .addCase(registerThunk.pending, handlePending)
      .addCase(loginThunk.pending, handlePending)
      .addCase(logoutThunk.pending, handlePending)
      .addCase(registerThunk.rejected, handleRejected)
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(logoutThunk.rejected, handleRejected);
  },
});
export const authReducer = slice.reducer;
