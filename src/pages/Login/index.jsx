import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Button } from "@mantine/core";
import _ from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ABILogo from "../../assets/abi_logo_black.png";
import { loginRequest } from "../../config/authConfig";
import { UserContext } from "../../context/userContext";
import CardMolecule from "../../molecules/Card";

export default function LoginComponent() {
  const navigate = useNavigate();

  const { instance, accounts, inProgress, logger } = useMsal();

  const isAuthenticated = useIsAuthenticated();
  const { error } = useContext(UserContext);
  const [showError, setShowError] = useState(null);

  if (!_.isEmpty(error)) {
    setShowError(true);
  }

  const location = useLocation();

  useEffect(() => {
    if (
      accounts &&
      accounts.length > 0 &&
      inProgress === InteractionStatus.None &&
      !_.isEmpty(error)
    ) {
      navigate("/");
    }
  }, [inProgress]);

  return (
    !isAuthenticated &&
    inProgress === InteractionStatus.None && (
      <div className="flex justify-center items-center pt-32">
        <CardMolecule
          cardClass="px-2 w-48 md:w-72 h-84 border bg-white rounded-lg"
          headerClass="py-6 flex justify-center items-center font-avantt text-4xl text-yellow-600 font-bold"
          header="PACT"
          body={
            <>
              <hr className="h-px w-14 bg-gray-500 border-0 dark:bg-gray-700 mx-auto" />
              <div className="pt-4 flex justify-center font-avantt font-bold text-lg mb-2">
                {"Welcome!"}
              </div>
              <div className="text-center font-avantt text-xs">
                {`Please use your AB InBev ID to login`}
              </div>
              <div className="pt-3 pb-3 flex justify-center">
                <Button
                  className="h-8 w-24 flex justify-center items-center bg-black text-white rounded-lg font-avantt font-semibold"
                  onClick={() => instance.loginRedirect(loginRequest)}
                >
                  {`Login`}
                </Button>
              </div>
              {showError ? "" : null}
              <a
                href="request"
                className="underline text-black font-avantt flex justify-center items-center font-semibold text-xs pb-4"
              >
                <span className="text-xs">Request Access?</span>
              </a>
              <div>
                <hr className="h-px w-44 bg-gray-500 border-0 dark:bg-gray-700 mx-auto" />
              </div>
            </>
          }
          footerClass="p-7 h-5 flex justify-center items-center"
          footer={<img src={ABILogo} className="h-5" alt="AB InBev Logo" />}
        />
      </div>
    )
  );
}
