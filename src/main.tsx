import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");

if (!(container instanceof HTMLElement)) {
  throw new Error("React root container was not found.");
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
