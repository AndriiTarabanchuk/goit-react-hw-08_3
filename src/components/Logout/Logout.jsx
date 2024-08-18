import React from "react";
import Button from "../Button/Button";
import css from "./Logout.module.css";
import { logoutThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
useDispatch;
const Logout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(logoutThunk())}>
        <p>Logout</p>
      </Button>
    </div>
  );
};

export default Logout;
