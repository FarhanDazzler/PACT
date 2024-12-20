import { FaFileAlt } from "react-icons/fa";
import { IoHandRightOutline } from "react-icons/io5";
import { MdPendingActions } from "react-icons/md";
import { RiProgress1Line } from "react-icons/ri";
import CardMolecule from "../../molecules/Card";

export default function DashboardCardConfig({
  zone = "",
  role = "",
  table = "",
  ...rest
}) {
  return getConfig(zone, role, table, rest).metricCardData.map(
    (cardData, index) => <CardMolecule key={index} {...cardData} />
  );
}

const getConfig = (zone = "", role = "", table = "", { ...rest }) => {
  let config = {};
  switch (
    `${zone?.toLowerCase()}/${role?.toLowerCase()}/${table?.toLowerCase()}`
  ) {
    case "afr/requestor/pr_creation":
      config = {
        metricCardData: [
          {
            header: "",
            headerClass: "font-avantt text-md h-5",
            body: 78,
            bodyClass:
              "h-24 m-3 bg-slate-200 flex items-center font-avantt font-bold text-3xl text-black border rounded-md",
            footer: "Draft",
            footerClass:
              "justify-center items-center h-1 ml-8 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
            cardClass:
              "rounded-lg bg-white border border-slate-300 h-40 w-40 p-1",
            icon: <FaFileAlt size="16" className="mr-2" />,
          },
          {
            header: "",
            headerClass: "font-avantt text-md h-5",
            body: 79,
            bodyClass:
              "h-24 m-3 bg-brown-100 flex items-center font-avantt font-bold text-3xl text-gold-extralight border rounded-md",
            footer: "Pending Approval",
            footerClass:
              "justify-center items-center h-1 ml-2 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
            cardClass:
              "rounded-lg bg-white border border-slate-300 h-40 w-40 p-1",
            icon: <MdPendingActions size="16" className="mr-1" />,
          },
          {
            header: "",
            headerClass: "font-avantt text-md h-5",
            body: 46,
            bodyClass:
              "h-24 m-3 bg-green-100 flex items-center font-avantt font-bold text-3xl text-green-700 border rounded-md",
            footer: "In Progress",
            footerClass:
              "justify-center items-center h-1 ml-5 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
            cardClass:
              "rounded-lg bg-white border border-slate-300 h-40 w-40 p-1",
            icon: <RiProgress1Line size="16" className="mr-2" />,
          },
          {
            header: "",
            headerClass: "font-avantt text-md h-5",
            body: 33,
            bodyClass:
              "h-24 m-3 bg-brown-100 flex items-center font-avantt font-bold text-3xl text-red-800 border rounded-md",
            footer: "On Hold",
            footerClass:
              "justify-center items-center h-1 ml-5 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
            cardClass:
              "rounded-lg bg-white border border-slate-300 h-40 w-40 p-1",
            icon: <IoHandRightOutline size="16" className="mr-2" />,
          },
        ],
      };
      break;
    case "afr/requestor/gr_confirmation":
      config = {
        metricCardData: [
          {
            header: "",
            headerClass: "font-avantt text-md h-5",
            body: 78,
            bodyClass:
              "h-24 m-3 bg-slate-200 flex items-center font-avantt font-bold text-3xl text-black border rounded-md",
            footer: "Draft",
            footerClass:
              "justify-center items-center h-1 ml-8 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
            cardClass:
              "rounded-lg bg-white border border-slate-300 h-40 w-40 p-1",
            icon: <FaFileAlt size="16" className="mr-2" />,
          },
          {
            header: "",
            headerClass: "font-avantt text-md h-5",
            body: 79,
            bodyClass:
              "h-24 m-3 bg-brown-100 flex items-center font-avantt font-bold text-3xl text-gold-extralight border rounded-md",
            footer: "Pending Approval",
            footerClass:
              "justify-center items-center h-1 ml-2 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
            cardClass:
              "rounded-lg bg-white border border-slate-300 h-40 w-40 p-1",
            icon: <MdPendingActions size="16" className="mr-1" />,
          },
          {
            header: "",
            headerClass: "font-avantt text-md h-5",
            body: 46,
            bodyClass:
              "h-24 m-3 bg-green-100 flex items-center font-avantt font-bold text-3xl text-green-700 border rounded-md",
            footer: "In Progress",
            footerClass:
              "justify-center items-center h-1 ml-5 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
            cardClass:
              "rounded-lg bg-white border border-slate-300 h-40 w-40 p-1",
            icon: <RiProgress1Line size="16" className="mr-2" />,
          },
          {
            header: "",
            headerClass: "font-avantt text-md h-5",
            body: 33,
            bodyClass:
              "h-24 m-3 bg-brown-100 flex items-center font-avantt font-bold text-3xl text-red-800 border rounded-md",
            footer: "On Hold",
            footerClass:
              "justify-center items-center h-1 ml-5 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
            cardClass:
              "rounded-lg bg-white border border-slate-300 h-40 w-40 p-1",
            icon: <IoHandRightOutline size="16" className="mr-2" />,
          },
        ],
      };
      break;
    case "afr/dag approver/pr_creation":
      break;

    default:
      config = {
        metricCardData: [
          {
            header: "",
            headerClass: "font-avantt text-md h-5",
            body: 33,
            bodyClass:
              "h-24 m-3 bg-brown-100 flex items-center font-avantt font-bold text-3xl text-red-800 border rounded-md",
            footer: "On Hold",
            footerClass:
              "justify-center items-center h-1 ml-5 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
            cardClass:
              "rounded-lg bg-white border border-slate-300 h-40 w-40 p-1",
            icon: <IoHandRightOutline size="16" className="mr-2" />,
          },
        ],
      };
      break;
  }
  return {
    metricCardData: config.metricCardData,
    ...rest,
  };
};
