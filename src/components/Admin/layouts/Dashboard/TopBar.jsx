import { useContext } from "react";
import { AuthContext } from "../../../../context/Auth/AuthContext";
import CurrentDate from "../../../../utils/CurrentDate";

export const TopBar = () => {
  const authCtx = useContext(AuthContext);
  const { user } = authCtx;
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="text-xl font-bold block">
            🚀 Welcome Back, {user?.name}
          </span>
          <span className="text-lg font-bold block text-stone-500 pl-8">
            <CurrentDate />
          </span>
        </div>
      </div>
    </div>
  );
};
