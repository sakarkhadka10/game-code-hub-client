import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const submitButtonHandler = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    const { email, password } = credentials;

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Check status first, before parsing JSON
      //This will basically check weather wrong email : 404 and when 400 : wrong pass
      if (response.status === 400 || response.status === 404) {
        setError("Invalid credentials");
        return; // Exit early
      }

      const data = await response.json(); // Parse JSON only if status is okay

      if (response.ok && data.authToken) {
        localStorage.setItem("token", data.authToken);
        navigate("/");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Fetch or parsing error:", error.message);
    }
  };

  const changeHandler = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2">
          <img
            src="/signup-wall.jpg"
            alt="Registration"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Login
          </h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form className="space-y-4" onSubmit={submitButtonHandler}>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                name="email"
                value={credentials.email}
                onChange={changeHandler}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                name="password"
                value={credentials.password}
                onChange={changeHandler}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                className="absolute top-10 right-3 flex items-center text-xl"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <p className="text-sm cursor-pointer">Forget Password Or Email?</p>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center pt-2">
            Don’t Have An Account?{" "}
            <Link to="/register" className="text-[#2563eb] font-extrabold">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
