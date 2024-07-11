import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import configStore from "@redux/config/configStore";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={configStore}>
    <App />
  </Provider>
  // </React.StrictMode>
);
