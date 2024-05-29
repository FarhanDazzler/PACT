import { InteractionStatus } from "@azure/msal-browser";
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
import { loginRequest } from "./config/authConfig";
import { OptionsContextProvider } from "./context/optionContext";
import { UserContext, UserContextProvider } from "./context/userContext";
import FooterComponent from "./pages/Footer/footer";
import HeaderComponent from "./pages/Header/header";
import DashboardComponent from "./pages/Home/dashboard";
import LoginComponent from "./pages/Login";
import PRCreationComponent from "./pages/PRCreation";
import RequestAccessComponent from "./pages/RequestAccess";
import { getApi } from "./particles/api";

const Pages = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const redirect = params.get("redirect");
  const [userState, userDispatch] = useContext(UserContext);

  const navigate = useNavigate();

  const { instance, accounts, inProgress } = useMsal();

  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (
      (accounts &&
        accounts?.length > 0 &&
        inProgress === InteractionStatus.None) ||
      ["/zone", "/request"].includes(location?.pathname)
    ) {
      if (accounts?.length > 0) {
        instance
          .acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
          })
          .then(async (response) => {
            localStorage.setItem("id_token", response?.idToken);
            const token = await getApi({
              routes: "login",
            })
              .then((res) => {
                console.log("🚀 ~ .then ~ res:", res);
                localStorage.setItem("id_token", res?.token);
              })
              .catch((err) =>
                userDispatch({ type: "SET_LOGIN_ERROR", payload: err })
              );

            // dataService
            //   .getMSGraphPhoto(response.accessToken)
            //   .then((image) => {
            //     if (image.type === "image/jpeg")
            //       userDispatch({ type: "SET_PROFILE_PHOTO", payload: image });
            //   })
            //   .catch((err) => console.log(err));
          })
          .catch((err) => {
            instance.logout({
              account: accounts.length > 0 ? accounts[0] : null,
            });
          });
      }
      if (redirect) navigate(redirect);
      else if (location.pathname == "/login") navigate("/");
      else {
        navigate(
          `${location.pathname}${location.search ? location.search : ""}`
        );
      }
    } else if (
      accounts &&
      accounts.length === 0 &&
      inProgress === InteractionStatus.None
    ) {
      if (redirect) navigate(`/login?redirect=${redirect}`);
      else navigate("/login");
    }
  }, [accounts, inProgress]);

  return (
    <div
      className="flex flex-col min-h-screen bg-gray-100"
      style={{ backgroundImage: 'url("../src/assests/images/bg_image.jpg")' }}
    >
      <div className="fixed top-0 w-full z-50">
        {!["/login", "/request"].includes(location?.pathname) && (
          <HeaderComponent />
        )}
      </div>
      <div className="flex flex-col bg-cover p-10">
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/request" element={<RequestAccessComponent />} />
          <Route path="/" element={<DashboardComponent />} />
          <Route path="/pr_request" element={<PRCreationComponent />} />
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
          <MantineProvider
            theme={{
              primaryColor: "yellow",
            }}
          >
            <OptionsContextProvider>
              <UserContextProvider>
                <Pages />
              </UserContextProvider>
            </OptionsContextProvider>
          </MantineProvider>
        </MsalProvider>
      </BrowserRouter>
    </div>
  );
}
