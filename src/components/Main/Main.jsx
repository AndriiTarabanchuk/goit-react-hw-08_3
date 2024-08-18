import React from "react";
import css from "./Main.module.css";
const Main = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};

export default Main;
