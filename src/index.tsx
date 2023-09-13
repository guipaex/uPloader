import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StatusProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
console.log(StatusProvider);
root.render(
  <React.StrictMode>
    <StatusProvider>
      <App />
    </StatusProvider>
  </React.StrictMode>
);
