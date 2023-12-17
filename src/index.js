import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastStateProvider } from "./context/toast";
import { SocketStateProvider } from "./context/socket";

ReactDOM.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <ToastStateProvider>
        <SocketStateProvider>
          <Router>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </Router>
        </SocketStateProvider>
      </ToastStateProvider>
    </GoogleOAuthProvider>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
