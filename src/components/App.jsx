import css from "./App.module.css";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
// import TasksPage from "../pages/TasksPage/TasksPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <div className={css.root}>
        <h1 className={css.visualliHidden}>Book of contacts</h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            {/* <Route path="tasks" element={<TasksPage />} /> */}
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
