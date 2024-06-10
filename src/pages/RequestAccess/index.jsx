// import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Button } from "@mantine/core";
import React from "react";
// import { useNavigate } from "react-router-dom";
import ABILogo from "/assets/abi_logo_black.png";
// import { loginRequest } from "../../config/authConfig";
import CardMolecule from "../../molecules/Card";
import ReactSelectMolecule from "../../molecules/Select";

export default function RequestAccessComponent() {
  // const { instance, inProgress } = useMsal();

  // const navigate = useNavigate();
  // const isAuthenticated = useIsAuthenticated();

  // const handleAuth = () => {
  //   instance.loginRedirect(loginRequest);
  // };

  // useEffect(() => {
  //   console.log(`AUTH LOG = ${isAuthenticated}`);
  //   if (isAuthenticated) {
  //     console.log("You are authenticated!");
  //     console.log(`Refer: ${document.referrer}`);
  //     navigate("/");
  //   }
  // }, [inProgress]);

  return (
    <div className="fixed inset-0 overflow-y-auto flex justify-center items-center h-full">
      <CardMolecule
        cardClass="mt-12 p-2 md:p-4 lg:p-8 w-48 md:w-96 border bg-white rounded-lg"
        headerClass="p-5 flex justify-center items-center font-avantt text-4xl text-yellow-600 font-bold"
        header="PACT"
        body={
          <>
            <hr className="h-px w-14 flex justify-center items-center bg-gray-500 border-0 dark:bg-gray-700 mx-auto" />
            <div className="pt-4 text-center font-avantt font-bold text-lg">
              {"Request for Access"}
            </div>
            <div className="pt-1 text-center font-avantt text-xs font-semibold text-gray-500">
              {
                "You currently do not have access to the PR-PO module, kindly raise request to get access"
              }
            </div>{" "}
            <div className="pt-4 flex justify-center items-center">
              <ReactSelectMolecule
                overrideClass="pt-2 flex justify-center items-center w-1/2"
                fontFamily="font-avantt"
                placeholder="Select Zone"
                options={[
                  { value: "afr", label: "AFR" },
                  { value: "ghq", label: "GHQ" },
                ]}
              />
            </div>
            <div className="flex justify-center items-center">
              <ReactSelectMolecule
                overrideClass="pt-2 flex justify-center items-center w-1/2"
                fontFamily="font-avantt"
                placeholder="Select Role"
                options={[
                  { value: "requestor", label: "Requestor" },
                  { value: "approver", label: "Approver" },
                  { value: "sourcing", label: "Sourcing" },
                ]}
              />
            </div>
            <div className="p-5 flex justify-center items-center w-full">
              <Button
                className="p-2 h-10 w-3/4 bg-black text-white rounded-lg font-avantt font-semibold"
                // onClick={handleAuth()}
              >
                {"Request Access"}
              </Button>
            </div>
          </>
        }
        footerClass="p-4 h-5 flex justify-center items-center"
        footer={<img src={ABILogo} className="h-5" alt="AB InBev Logo" />}
      />
    </div>
  );
}
