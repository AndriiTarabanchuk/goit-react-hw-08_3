import React from "react";
import Button from "../Button/Button";
import css from "./Exit.module.css";
import { logoutThunk } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
useDispatch;
const Exit = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button className={css.btnExit} onClick={() => dispatch(logoutThunk())}>
        <p>Log out</p>
      </button>
    </div>
  );
};

export default Exit;
