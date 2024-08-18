import css from "./Register.module.css";
import { Field, Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Button from "../../components/Button/Button";

import { registerThunk } from "../../redux/auth/authOperations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Register = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (value, options) => {
    console.log(value);
    dispatch(registerThunk(value));
    options.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.formReg}>
          <Field
            className={css.inputReg}
            name="name"
            placeholder="inter your name"
          />
          <Field
            className={css.inputReg}
            name="email"
            placeholder="inter your email"
          />
          <Field
            className={css.inputReg}
            name="password"
            type="password"
            placeholder="inter your password"
          />
          <Button type="submit">
            <p>Register</p>
          </Button>

          <p>You already heve account?</p>
          <Link to="/">Go Home page...</Link>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
