// import { Button } from "@mantine/core";
// import React from "react";
// import ABILogo from "../../assests/images/abi_logo_black.png";
// import CardMolecule from "../../molecules/Card";
// import SelectMolecule from "../../molecules/Select";

// export default function RequestAccessComponent() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <CardMolecule
//         cardClass="px-2 w-48 md:w-72 h-84 border bg-white rounded-lg"
//         headerClass="py-6 flex justify-center items-center font-avant text-4xl text-yellow-600 font-bold"
//         header="PR-PO"
//         body={
//           <>
//             <hr className="h-px w-14 flex justify-center items-center bg-gray-500 border-0 dark:bg-gray-700 mx-auto" />
//             <div className="text-center font-avant text-xs">
//               {
//                 "You currently do not have access to the PR-PO module, kindly raise request to get access"
//               }
//             </div>{" "}
//             <SelectMolecule
//               placeholder="Select Role"
//               options={[
//                 { value: "requestor", label: "Requestor" },
//                 { value: "approver", label: "Approver" },
//                 { value: "sourcing", label: "Sourcing" },
//               ]}
//             />{" "}
//             <SelectMolecule
//               placeholder="Select Zone"
//               options={[
//                 { value: "afg", label: "AFG" },
//                 { value: "ghq", label: "GHQ" },
//               ]}
//             />
//             <Button className="h-8 w-24 flex justify-center ml-20 items-center bg-black text-white rounded-lg font-avant font-semibold">
//               {"Request Access"}
//             </Button>
//           </>
//         }
//         footerClass="p-7 h-5 flex justify-center items-center"
//         footer={<img src={ABILogo} className="h-5" alt="AB InBev Logo" />}
//       />
//     </div>
//   );
// }
