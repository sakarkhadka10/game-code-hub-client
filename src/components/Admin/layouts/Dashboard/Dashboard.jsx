import { TopBar } from "./TopBar";
import { StatCards } from "./StatCards";

export const Dashboard = () => {
  return (
    <div className="bg-white rounded-lg pb-4 shadow">
      <TopBar />
      <div className="grid grid-cols-4 gap-4 px-6">
        <StatCards />
      </div>
    </div>
  );
};

export default Dashboard;
