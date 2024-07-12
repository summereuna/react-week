import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import configStore from "@redux/config/configStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={configStore}>
    <QueryClientProvider client={queryClient}>
      {/* 개발 환경에서만 ReactQueryDevtools를 사용 */}
      {/* {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />} */}
      <App />
    </QueryClientProvider>
  </Provider>
  // </React.StrictMode>
);
