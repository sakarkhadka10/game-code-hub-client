import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./Router/RouterConfig";
import HeaderNotification from "./components/Elements/HeaderNotification";
import { NOTIFICATION_DESKTOP } from "./config";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import ProductState from "./context/Product/ProductState";
import DesktopNav from "./components/Desktop/DesktopNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <MantineProvider>
          <ProductState>
            <div className="hidden md:block">
              {NOTIFICATION_DESKTOP.isActive && <HeaderNotification />}
            </div>
            <DesktopNav />

            <RouterConfig />
          </ProductState>
        </MantineProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
