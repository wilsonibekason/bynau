import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      {/* <ScrollToTop> */}
      <App />
      {/* </ScrollToTop> */}
    </Router>
  </React.StrictMode>
);
