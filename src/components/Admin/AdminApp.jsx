import Sidebar from "./layouts/Sidebar/Sidebar";
import { Dashboard } from "./layouts/Dashboard/Dashboard";

const AdminApp = () => {
  return (
    <div className="grid  gap-4 p-4 grid-cols-[220px_1fr]">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default AdminApp;
