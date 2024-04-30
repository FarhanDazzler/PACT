import { Button } from "@mantine/core";
import React from "react";
import ABILogo from "../../assests/images/abi_logo_black.png";
import CardMolecule from "../../molecules/Card";
import ReactSelectMolecule from "../../molecules/Select";

export default function RequestAccessComponent() {
  return (
    <div className="fixed inset-0 overflow-y-auto flex justify-center items-center h-screen">
      <CardMolecule
        cardClass="mt-12 p-2 md:p-4 lg:p-8 w-48 md:w-96 border bg-white rounded-lg"
        headerClass="py-8 flex justify-center items-center font-avant text-4xl text-yellow-600 font-bold"
        header="PR-PO"
        body={
          <>
            <hr className="h-px w-14 flex justify-center items-center bg-gray-500 border-0 dark:bg-gray-700 mx-auto" />
            <div className="pt-2 text-center font-avant font-bold text-lg">
              {"Request for Access"}
            </div>
            <div className="pt-1 text-center font-avant text-xs">
              {
                "You currently do not have access to the PR-PO module, kindly raise request to get access"
              }
            </div>{" "}
            <div className="flex justify-center items-center">
              <ReactSelectMolecule
                overrideClass="pt-2 flex justify-center items-center w-full"
                fontFamily=" font-avant"
                placeholder="Select Zone"
                options={[
                  { value: "afr", label: "AFR" },
                  { value: "ghq", label: "GHQ" },
                ]}
              />
            </div>
            <div className="flex justify-center items-center">
              <ReactSelectMolecule
                overrideClass="pt-2 flex justify-center items-center w-full"
                fontFamily=" font-avant"
                placeholder="Select Role"
                options={[
                  { value: "requestor", label: "Requestor" },
                  { value: "approver", label: "Approver" },
                  { value: "sourcing", label: "Sourcing" },
                ]}
              />
            </div>
            <div className="p-5 flex justify-center items-center w-full">
              <Button className="p-2 h-10 w-fit bg-black text-white rounded-lg font-avant font-semibold">
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
