import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Button } from "@mantine/core";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ABILogo from "../../assests/images/abi_logo_black.png";
import CardMolecule from "../../molecules/Card";
import { loginRequest } from "../../utils/authConfig";

export default function LoginComponent() {
  const navigate = useNavigate();

  const { instance, inProgress } = useMsal();
  console.log("🚀 ~ LoginComponent ~ inProgress:", inProgress);

  const isAuthenticated = useIsAuthenticated();

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");
    if (isAuthenticated && inProgress === InteractionStatus.None) {
      console.log("You are authenticated!");
      console.log(`Refer: ${document.referrer}`);

      console.log("🚀 ~ useEffect ~ redirect:", redirect);
      if (redirect) navigate(redirect);
      else navigate("/");
    }
  }, [inProgress]);

  return (
    <div className="flex justify-center items-center h-screen">
      <CardMolecule
        cardClass="px-2 w-48 md:w-72 h-84 border bg-white rounded-lg"
        headerClass="py-6 flex justify-center items-center font-avant text-4xl text-yellow-600 font-bold"
        header="PR-PO"
        body={
          <>
            <hr className="h-px w-14 flex justify-center items-center bg-gray-500 border-0 dark:bg-gray-700 mx-auto" />
            <div className="pt-4 flex justify-center font-avant font-bold text-lg mb-2">
              {"Welcome!"}
            </div>
            <div className="text-center font-avant text-xs">
              {`Please use your AB InBev ID to login`}
            </div>
            <div className="p-3">
              <Button
                className="h-8 xs:16  md: w-24  flex justify-center ml-20 items-center bg-black text-white rounded-lg font-avant font-semibold"
                onClick={() => instance.loginRedirect(loginRequest)}
              >
                {`Login`}
              </Button>
            </div>
            <a className="underline text-black font-avant flex justify-center items-center font-semibold text-xs pb-4">
              {"Request Access?"}
            </a>
            <div>
              <hr className="h-px w-44 flex justify-center items-center bg-gray-500 border-0 dark:bg-gray-700 mx-auto" />
            </div>
          </>
        }
        footerClass="p-7 h-5 flex justify-center items-center"
        footer={<img src={ABILogo} className="h-5" alt="AB InBev Logo" />}
      />
    </div>
  );
}
