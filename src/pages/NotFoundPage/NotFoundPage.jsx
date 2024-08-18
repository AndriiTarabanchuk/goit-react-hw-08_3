import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import React from "react";
const NotFoundPage = () => {
  return (
    <div className={css.wrap}>
      <h2 className={css.title}>Page not found...</h2>
      <p>
        <Link to="/"> Click to return to HomePage...</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
