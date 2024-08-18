import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  arr: [],
};

const slice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
  },
});

export const counterReducer = slice.reducer;
export const { increment } = slice.actions;
