import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  navigate("/admin-login");

  return (
    <div>
      <h1>admin</h1>
    </div>
  );
};

export default Admin;
