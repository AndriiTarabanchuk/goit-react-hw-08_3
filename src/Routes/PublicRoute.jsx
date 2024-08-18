import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate, useLocation } from "react-router";

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  if (isLoggedIn) {
    <Navigate to={location?.state ?? "/"} />;
  }
  return children;
};
