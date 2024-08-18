import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectTasks,
} from "../redux/tasks/selectors";
import { fetchTasks } from "../redux/tasks/operations";
import Layout from "./Layout/Layout";
import AppBar from "./AppBar/AppBar";
import TaskList from "./TaskList/TaskList";
import TaskForm from "./TaskForm/TaskForm";
// import StartEl from "./StartEl/StartEl";
// import GetTasks from "./GetTasks/GetTasks";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Layout>
        <TaskForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <TaskList />
        {/* <StartEl /> */}
        {/* <GetTasks /> */}
      </Layout>
    </>
  );
}

export default App;
