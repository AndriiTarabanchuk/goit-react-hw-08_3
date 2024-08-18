import css from "./Login.module.css";
import { Field, Formik, Form } from "formik";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { loginThunk } from "../../redux/auth/authOperations";

const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (value, options) => {
    console.log(value);
    dispatch(loginThunk(value));
    // options.resetForm();
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className={css.wrapLogin}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.formLogin}>
          <Field
            className={css.inputLogin}
            name="email"
            placeholder="inter your email"
          />
          <Field
            className={css.inputLogin}
            name="password"
            type="password"
            placeholder="inter your password"
          />
          <Button type="submit">
            <p>Login</p>
          </Button>
          <p>
            You don't have account?<Link to="/register">Sing up!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
