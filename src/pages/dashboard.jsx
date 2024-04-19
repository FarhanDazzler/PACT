import CardMolecule from "../molecules/Card";

export default function DashboardComponent() {
  const metricCardData = [
    {
      header: "",
      body: 78,
      footer: "Draft",
      cardClass: "px-2 w-36 lg:w-40 border border-slate-300",
      bodyClass:
        "h-20 ml-2 w-28 lg:w-32 bg-slate-200 flex items-center font-avant font-semibold text-4xl text-black border rounded-md",
      footerClass:
        "p-2 justify-center items-center h-10 ml-2 !justify-start !bg-transparent text-xs font-avant font-semibold max-w-fit whitespace-nowrap",
    },
    {
      header: "",
      body: 79,
      footer: "Pending Approval",
      cardClass: "px-2 w-36 lg:w-40 border border-slate-300",
      bodyClass:
        "h-20 ml-2 w-28 lg:w-32 bg-brown-100 flex items-center font-avant font-semibold text-4xl text-gold-extralight border rounded-md",
      footerClass:
        "p-2 justify-center items-center h-10 ml-2 !justify-start !bg-transparent text-xs font-avant font-semibold max-w-fit whitespace-nowrap",
    },
    {
      header: "",
      body: 46,
      footer: "In Progress",
      cardClass: "px-2 w-36 lg:w-40 border border-slate-300",
      bodyClass:
        "h-20 ml-2 w-28 lg:w-32 bg-green-100 flex items-center font-avant font-semibold text-4xl text-green-700 border rounded-md",
      footerClass:
        "p-2 justify-center items-center h-10 ml-2 !justify-start !bg-transparent text-xs font-avant font-semibold max-w-fit whitespace-nowrap",
    },
    {
      header: "",
      body: 33,
      footer: "On Hold",
      cardClass: "px-2 w-36 lg:w-40 border border-slate-300",
      bodyClass:
        "h-20 ml-2 w-28 lg:w-32 bg-brown-100 flex items-center font-avant font-bold text-3xl text-maroon border rounded-md",
      footerClass:
        "p-2 justify-center items-center h-10 ml-2 !justify-start !bg-transparent text-xs font-avant font-semibold max-w-fit whitespace-nowrap",
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
            // footer={<div>{card?.footer}</div>}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex lg:flex-row lg:justify-end lg:items-end gap-4">
          {metricCardData?.map((card, index) => (
            <CardMolecule
              key={index}
              {...card}
              cardClass={`rounded-lg w-full sm:w-auto md:w-96 ${card?.cardClass}`}
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
