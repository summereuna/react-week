import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import "@/reset.css";

import store from "@/redux/config/configStore";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  //</React.StrictMode>,
);
