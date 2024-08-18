import { Outlet } from "react-router";
import css from "./Layout.module.css";
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/main";

const Layout = () => {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <footer className={css.footer}>AndriiTarbanchuk, &copy;2024</footer>
    </div>
  );
};

export default Layout;
