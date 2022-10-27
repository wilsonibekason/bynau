import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import "./index.css";
import { IconProvider } from "./service/globalContext/IconContext";
import { Provider } from "react-redux";
import store from "./service/redux/app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <IconProvider>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </IconProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
