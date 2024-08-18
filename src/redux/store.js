import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./start/slice";
import { tasksReducer } from "./tasks/taskSlice";
import { filtersReducer } from "./tasks/filterSlice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
