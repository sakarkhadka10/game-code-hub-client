import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./Router/RouterConfig";
import HeaderNotification from "./components/Elements/HeaderNotification";
import { NOTIFICATION_DESKTOP } from "./config";
import ProductState from "./context/Product/ProductState";
import DesktopNav from "./components/Desktop/DesktopNav";
import MobileNav from "./components/Mobile/MobileNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductState>
          <div className="hidden md:block">
            {NOTIFICATION_DESKTOP.isActive && <HeaderNotification />}
          </div>
          <div className="hidden md:block">
            <DesktopNav />
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>

          <RouterConfig />
        </ProductState>
      </BrowserRouter>
    </>
  );
}

export default App;
