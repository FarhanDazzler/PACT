import CardMolecule from "../molecules/Card";

export default function DashboardComponent() {
  const metricCardData = [
    {
      header: "",
      headerClass: "h-5",
      body: 78,
      bodyClass:
        "h-20 ml-2 mr-2 w-28 lg:w-32  bg-slate-200 flex items-center font-avant font-semibold text-4xl text-black border rounded-md",
      footer: "Draft",
      footerClass:
        "p-2 justify-center items-center h-10 ml-2 !justify-start !bg-transparent text-xs font-avant font-semibold max-w-fit whitespace-nowrap",
      cardClass: "px-2 w-36 md:w-40 border border-slate-300",
    },
    {
      header: "",
      headerClass: "h-5",
      body: 79,
      bodyClass:
        "h-20 ml-2 mr-2 w-28 lg:w-32 bg-brown-100 flex items-center font-avant font-semibold text-4xl text-gold-extralight border rounded-md",
      footer: "Pending Approval",
      footerClass:
        "p-2 justify-center items-center h-10 ml-2 !justify-start !bg-transparent text-xs font-avant font-semibold max-w-fit whitespace-nowrap",
      cardClass: "px-2 w-36 md:w-40 border border-slate-300",
    },
    {
      header: "",
      headerClass: "h-5",
      body: 46,
      bodyClass:
        "h-20 ml-2 mr-2 w-28 lg:w-32 bg-green-100 flex items-center font-avant font-semibold text-4xl text-green-700 border rounded-md",
      footer: "In Progress",
      footerClass:
        "p-2 justify-center items-center h-10 ml-2 !justify-start !bg-transparent text-xs font-avant font-semibold max-w-fit whitespace-nowrap",
      cardClass: "px-2 w-36 md:w-40 border border-slate-300",
    },
    {
      header: "",
      headerClass: "h-5",
      body: 33,
      bodyClass:
        "h-20 ml-2 mr-2 w-28 lg:w-32 bg-brown-100 flex items-center font-avant font-bold text-3xl text-maroon border rounded-md",
      footer: "On Hold",
      footerClass:
        "p-2 justify-center items-center h-10 ml-2 !justify-start !bg-transparent text-xs font-avant font-semibold max-w-fit whitespace-nowrap",
      cardClass: "px-2 w-36 md:w-40 border border-slate-300",
    },
  ];

  return (
    <div className="pt-10 px-4 lg:px-10 lg:gap-4 min-h-full border-opacity-60 flex flex-col lg:flex-row justify-between items-start">
      <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
        <div className="pl-4 lg:pl-0">
          <CardMolecule
            cardClass="rounded-lg w-full sm:w-auto md:w-96"
            header={<div className="font-avant text-md">{"Welcome"}</div>}
            body={
              <div className="font-avant text-4xl text-yellow-600 font-bold">
                {"Samuel J."}
              </div>
            }
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex lg:flex-row lg:justify-end lg:items-end gap-4">
          {metricCardData?.map((card, index) => (
            <CardMolecule
              key={index}
              {...card}
              cardClass={`rounded-lg bg-white ${card?.cardClass}`}
              header={<div className="font-avant text-md">{card?.header}</div>}
              body={<div>{card?.body}</div>}
              footer={<div>{card?.footer}</div>}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
