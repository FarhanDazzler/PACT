import React from "react";
// import DynamicTableOrganism from "../../organisms/DynamicTable";

export const GRConfirmationRequest = () => {
  return (
    <div>
      <h1>Hello,Gr Page</h1>
    </div>
  );
};

// import ButtonAtom from "../../atoms/Button";
// import CardMolecule from "../../molecules/Card";
// import DashboardCardConfig from "./cardConfig";
// import DashboardTableConfig from "./list";

// export default function GRConfirmationRequest(props) {
//   const userName = localStorage.getItem("name");
//   const zone = localStorage.getItem("zone");
//   const role = localStorage.getItem("role_name");
//   return (
//     <div className="p-3 font-avantt">
//       <div className=" md:gap-4 min-h-full border-opacity-60 flex flex-col md:flex-row justify-between items-start">
//         <div className="w-full md:w-1/3 mb-4 md:mb-0 mt-8">
//           <div>
//             <CardMolecule
//               metricCardData={{
//                 cardClass: "rounded-lg w-full sm:w-auto md:w-96 bg-gray-100",
//                 header: <div className="text-lg font-bold">Welcome</div>,
//                 body: (
//                   <div className="text-4xl text-yellow-600 font-bold">
//                     {userName}
//                   </div>
//                 ),
//               }}
//             />
//           </div>
//         </div>
//         <div className="w-full md:w-2/3 mt-10 justify-between">
//           <div className="flex md:flex-row gap-4 justify-end">
//             <DashboardCardConfig {...props} />
//           </div>
//         </div>
//       </div>
//       <div className="bg-gray mt-16 ">
//         <ButtonAtom
//           overrideClass=" bg-black w-32 mb-4 rounded-xl"
//           label="PR Creation"
//         />
//       </div>
//       <DashboardTableConfig zone={zone} role={role} {...props} />
//     </div>
//   );
// }
