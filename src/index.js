import { PublicClientApplication } from "@azure/msal-browser";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { msalConfig } from "./utils/authConfig";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const msalInstance = new PublicClientApplication(msalConfig);

root.render(
  <React.StrictMode>
    <App msalInstance={msalInstance} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
