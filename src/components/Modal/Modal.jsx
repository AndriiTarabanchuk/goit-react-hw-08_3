import css from "./Modal.module.css";
import React from "react";

const Modal = ({ children }) => {
  return (
    <div className={css.wrap}>
      <div className={css.cont}>{children}</div>
    </div>
  );
};

export default Modal;
