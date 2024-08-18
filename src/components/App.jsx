import css from "./App.module.css";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeThunk } from "../redux/auth/operations";
import { PrivateRoute } from "../Routes/PrivateRoute";
import { PublicRoute } from "../Routes/PublicRoute";
import { selectIsRefreshing } from "../redux/auth/selectors";

function App() {
  const dispatch = useDispatch();

  // const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]);
  // isRefreshing ? null :
  return (
    <>
      <div className={css.root}>
        <h1 className={css.visualliHidden}>Book of contacts</h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
