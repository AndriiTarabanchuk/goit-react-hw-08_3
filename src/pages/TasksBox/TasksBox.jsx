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
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router";
import AppBar from "../AppBar/AppBar";

const TasksBox = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <>
          {/* <AppBar /> */}
          <TaskForm />
          {isLoading && !error && <b>Request in progress...</b>}
          <TaskList />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default TasksBox;
