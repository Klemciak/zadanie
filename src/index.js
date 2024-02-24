import React from "react";
import ReactDOM from "react-dom/client";
import App from "./layout/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App basename={process.env.PUBLIC_URL} />
  </React.StrictMode>
);
