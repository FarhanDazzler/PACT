import { MsalProvider, useIsAuthenticated, useMsal } from "@azure/msal-react";
import { MantineProvider } from "@mantine/core";
import React, { useContext, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import bgImage from "../src/assests/images/bg_image.jpg";
import FooterComponent from "./pages/Footer/footer";
import HeaderComponent from "./pages/Header/header";
import LoginComponent from "./pages/Login";
// import RequestAccessComponent from "./pages/RequestAccess";
import { InteractionStatus } from "@azure/msal-browser";
import { UserContext, UserContextProvider } from "./context/userContext";
import DashboardComponent from "./pages/dashboard";
import { getApi } from "./particles/api";
import { loginRequest } from "./utils/authConfig";

const Pages = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const { instance, accounts, inProgress } = useMsal();

  const isAuthenticated = useIsAuthenticated();

  const [userState, userDispatch] = useContext(UserContext);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");
    if (!isAuthenticated && inProgress === InteractionStatus.None) {
      if (redirect) navigate(`/login?redirect=${redirect}`);
      else navigate("/login");
    }
  }, [inProgress]);

  useEffect(() => {
    if (accounts?.length > 0) {
      authentication();
    }
  }, [accounts, inProgress]);

  const authentication = async () => {
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then(async (response) => {
        localStorage.setItem("id_token", response?.idToken);
        const idToken = await getApi({
          data: { id_token: response?.idToken },
          routes: "afr_routes/users",
        });
      })
      .catch((err) => {
        console.log(`Error occurred while acquiring token: ${err}`);
      });
  };

  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {!["/login"].includes(location?.pathname) && <HeaderComponent />}
      <div className="flex-grow overflow-y-auto bg-cover">
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          {/* <Route path="/request" element={<RequestAccessComponent />} /> */}
          <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    </div>
  );
};

export default function App({ msalInstance }) {
  return (
    <div className="App">
      <BrowserRouter>
        <MsalProvider instance={msalInstance}>
          <MantineProvider>
            <UserContextProvider>
              <Pages />
            </UserContextProvider>
          </MantineProvider>
        </MsalProvider>
      </BrowserRouter>
    </div>
  );
}
