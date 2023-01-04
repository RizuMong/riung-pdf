import React from "react";
import ReactDOM from "react-dom/client";

import Index from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/App.css"
import "../src/styles/Index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
