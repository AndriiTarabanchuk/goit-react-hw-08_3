import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b253351ca8ad33d4f7608e.mockapi.io";
const url1 = "https://66b253351ca8ad33d4f7608e.mockapi.io";
const url12 = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from "../tasks/taskSlice";
// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// const url = "https://62584f320c918296a49543e7.mockapi.io";
// export const fetchTasks = () => async (dispatch) => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());

//     // HTTP-запит
//     const response = await axios.get("/tasks");

//     // Обробка даних
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Обробка помилки
//     dispatch(fetchingError(e.message));
//   }
// };

///-------------------------------------
// src/redux/operations.js

// import axios from "axios";

// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// const fetchTasks = () => async (dispatch) => {
//   try {
//     const response = await axios.get("/tasks");
//   } catch (e) {}
// };
