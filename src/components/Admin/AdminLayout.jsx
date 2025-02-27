// AdminLayout.js
import { Outlet } from "react-router-dom";
import Sidebar from "./layouts/Sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex text-stone-950 bg-stone-100">
      <div className="px-4 pt-4 text-center">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Outlet />{" "}
        {/* Renders the child routes (e.g., Dashboard, AddProducts, etc.) */}
      </div>
    </div>
  );
};

export default AdminLayout;
