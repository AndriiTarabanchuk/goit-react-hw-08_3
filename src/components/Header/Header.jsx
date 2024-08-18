import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import { useSelector } from "react-redux";
import Logout from "../Logout/Logout";
import { selectUser, selectIsLoggedIn } from "../../redux/auth/selectors";

const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.item}>
        <NavLink to="/">Home</NavLink>
      </div>
      {isLoggedIn && (
        <div className={css.item}>
          <NavLink to="/tasks">Tasks</NavLink>
        </div>
      )}
      {isLoggedIn && (
        <div className={css.name}>
          <p>
            Welcome, <span>{user.email}</span>
          </p>
        </div>
      )}
      <ul className={css.list}>
        {!isLoggedIn ? (
          <>
            <li className={css.item}>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="/login">Log In</NavLink>
            </li>
          </>
        ) : (
          <li>
            <Logout />
          </li>
        )}
      </ul>
    </header>
  );
};
export default Header;
