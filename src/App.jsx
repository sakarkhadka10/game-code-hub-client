import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./Router/RouterConfig";
import HeaderNotification from "./components/Elements/HeaderNotification";
import { NOTIFICATION_DESKTOP } from "./config";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <MantineProvider>
          <div className="hidden md:block">
            {NOTIFICATION_DESKTOP.isActive && <HeaderNotification />}
          </div>

          <RouterConfig />
        </MantineProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
