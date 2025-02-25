import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn"); // check if logged in already
  return isLoggedIn === "true" ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
