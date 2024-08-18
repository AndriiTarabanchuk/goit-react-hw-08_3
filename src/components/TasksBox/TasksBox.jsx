import css from "./TasksBox.module.css";
import React from "react";
import { useEffect } from "react";
import {
  selectError,
  selectIsLoading,
  selectTasks,
} from "../../redux/tasks/selectors";
import { fetchTasks } from "../../redux/tasks/operations";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "../AppBar/AppBar";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";

const TasksBox = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </div>
  );
};

export default TasksBox;
