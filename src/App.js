import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { MantineProvider } from "@mantine/core";
import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import bgImage from "../src/assests/images/bg_image.jpg";
import FooterComponent from "./pages/Footer/footer";
import HeaderComponent from "./pages/Header/header";
import LoginComponent from "./pages/Login";
import RequestAccessComponent from "./pages/RequestAccess";
import DashboardComponent from "./pages/dashboard";
import { msalConfig } from "./utils/authConfig";

const Pages = () => {
  const location = useLocation();

  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {!["/login"].includes(location?.pathname) && <HeaderComponent />}
      <div className="flex-grow overflow-y-auto bg-cover">
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/request" element={<RequestAccessComponent />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    </div>
  );
};

export default function App() {
  const msalInstance = new PublicClientApplication(msalConfig);
  console.log("🚀 ~ App ~ msalConfig:", msalConfig);

  return (
    <div className="App">
      <BrowserRouter>
        <MsalProvider instance={msalInstance}>
          <MantineProvider>
            <Pages />
          </MantineProvider>
        </MsalProvider>
      </BrowserRouter>
    </div>
  );
}
