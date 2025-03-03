import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext"; // Use named import

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change null to false for clarity
  const getUserApi = `${import.meta.env.VITE_SECRET_KEY_URI}/auth/getuser`;

  //Fetch All Users Data

  // Fetch User Data Based on Token
  const fetchUserDetails = async (token) => {
    try {
      const response = await fetch(getUserApi, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data);
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem("token");
        setUser(null);
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
      setIsLoggedIn(false);
    }
  };

  // Check for token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserDetails(token);
    }
  }, []);

  // Login function to set token and fetch user
  const login = async (token) => {
    localStorage.setItem("token", token);
    await fetchUserDetails(token);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
