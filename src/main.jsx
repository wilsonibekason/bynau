import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import "./index.css";
import { IconProvider } from "./service/globalContext/IconContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <IconProvider>
        {/* <ScrollToTop> */}
        <App />
        {/* </ScrollToTop> */}
      </IconProvider>
    </Router>
  </React.StrictMode>
);
