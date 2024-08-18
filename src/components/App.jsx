import css from "./App.module.css";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TasksBox from "./TasksBox/TasksBox";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/auth/selectors";
function App() {
  return (
    <>
      <div className={css.root}>
        <h1 className={css.visualliHidden}>Book of contacts</h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tasks" element={<TasksBox />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
