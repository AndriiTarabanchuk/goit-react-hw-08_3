import React from "react";
import css from "./Layout.module.css";
const Layout = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};

export default Layout;
