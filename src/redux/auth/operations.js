import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi, setToken, clearToken } from "../../config/goitApi";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("users/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "autj/logout",
  async (_, thunkAPI) => {
    try {
      await goitApi.post("/users/logout");
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMeThunk = createAsyncThunk(
  "auth/getMe",
  async (_, thunkAPI) => {
    const saveToken = thunkAPI.getState().auth.token;
    if (saveToken === null) {
      return thunkAPI.rejectWithValue("Token is not exist!");
    }
    try {
      setToken(saveToken);
      const { data } = await goitApi.get("users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
