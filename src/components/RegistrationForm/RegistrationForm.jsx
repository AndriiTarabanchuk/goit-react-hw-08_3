import css from "./RegistrationForm.module.css";
import { Field, Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Button from "../Button/Button";

import { registerThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RegistrationForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (value, options) => {
    dispatch(registerThunk(value));
    options.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className={css.wrapReg}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.formReg}>
          <Field
            className={css.inputReg}
            name="name"
            placeholder="Enter your name"
          />
          <Field
            className={css.inputReg}
            name="email"
            placeholder="Enter your email"
          />
          <Field
            className={css.inputReg}
            name="password"
            type="password"
            placeholder="Enter your password"
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

export default RegistrationForm;
