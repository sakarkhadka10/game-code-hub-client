import { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";

const ProtectedRoute = () => {
  const context = useContext(AuthContext);
  const location = useLocation();

  if (!context) {
    return <Navigate to="/login" />;
  }

  const { user, isLoggedIn } = context;

  // If user is not logged in then redirect to login page.
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  // If its not admin tried to access admin panel then redirect back to home page
  if (user?.usertype !== "admin") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
