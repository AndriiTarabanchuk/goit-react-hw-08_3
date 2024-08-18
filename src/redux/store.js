import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks/taskSlice";
import { filtersReducer } from "./tasks/filterSlice";
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});
