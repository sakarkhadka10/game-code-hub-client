import { NOTIFICATION_DESKTOP } from "../../config";

const HeaderNotification = () => {
  return (
    <div className="bg-amber-300 px-2 py-3 font-bold text-center text-md">
      <h3>{NOTIFICATION_DESKTOP.message}</h3>
    </div>
  );
};

export default HeaderNotification;
