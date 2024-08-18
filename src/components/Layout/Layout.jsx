import { Outlet } from "react-router";
import css from "./Layout.module.css";
import React from "react";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/main";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Main>
        <Outlet />
      </Main>
      <footer className={css.footer}>AndriiTarbanchuk,2024 &copy;</footer>
    </div>
  );
};

export default Layout;
