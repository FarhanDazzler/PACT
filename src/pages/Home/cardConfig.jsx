import CardMolecule from "../../molecules/Card";

export default function DashboardCardConfig({ zone = "", role = "", ...rest }) {
  return <CardMolecule {...getConfig(zone, role, rest)} />;
}

const getConfig = (zone = "", role = "", { ...rest }) => {
  let config = {};
  switch (`${zone}/${role}`) {
    default:
      config = {
        metricCardData: [
          {
            header: "",
            headerClass: "font-avantt text-md h-5",
            body: 78,
            bodyClass:
              "h-24 m-1 bg-slate-200 flex items-center font-avantt font-semibold text-4xl text-black border rounded-md",
            footer: "Draft",
            footerClass:
              "p-2 flex justify-center items-center h-5 ml-2 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
            cardClass:
              "rounded-lg bg-white w-36 md:w-44 border border-slate-300 h-40",
          },
          {
            header: "",
            headerClass: "font-avantt text-md h-5",
            body: 79,
            bodyClass:
              "h-24 m-1 bg-brown-100 flex items-center font-avantt font-semibold text-4xl text-gold-extralight border rounded-md",
            footer: "Pending Approval",
            footerClass:
              "p-2 justify-center items-center h-5 ml-2 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
            cardClass:
              "rounded-lg bg-white w-36 md:w-44 border border-slate-300 h-40",
          },
          {
            header: "",
            headerClass: "font-avantt text-md h-5",
            body: 46,
            bodyClass:
              "h-24 m-1 bg-green-100 flex items-center font-avantt font-semibold text-4xl text-green-700 border rounded-md",
            footer: "In Progress",
            footerClass:
              "p-2 justify-center items-center h-5 ml-2 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
            cardClass:
              "rounded-lg bg-white w-36 md:w-44 border border-slate-300 h-40",
          },
          {
            header: "",
            headerClass: "font-avantt text-md h-5",
            body: 33,
            bodyClass:
              "h-24 m-1 bg-brown-100 flex items-center font-avantt font-bold text-3xl text-maroon border rounded-md",
            footer: "On Hold",
            footerClass:
              "p-2 justify-center items-center h-5 ml-2 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
            cardClass:
              "rounded-lg bg-white w-36 md:w-44 border border-slate-300 h-40",
          },
        ],
      };
      break;
  }
  return {
    metricCardData: config?.metricCardData,
    ...rest,
  };
};
