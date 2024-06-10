import { useState } from "react";
import ButtonAtom from "../../atoms/Button";
import CardMolecule from "../../molecules/Card";
import DashboardCardConfig from "./cardConfig";
import DashboardTableConfig from "./list";

export default function DashboardComponent(props) {
  const [isStyleOne, setIsStyleOne] = useState(true);
  const [table, setTable] = useState("pr_creation");
  const userName = localStorage.getItem("name");
  const zone = localStorage.getItem("zone");
  const role = localStorage.getItem("role_name");

  const toggleStyle = (table) => {
    setIsStyleOne(!isStyleOne);
    setTable(table);

    console.log(isStyleOne, table);
  };

  return (
    <div className="p-3 font-avantt">
      <div className=" md:gap-4 min-h-full border-opacity-60 flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 mt-8">
          <div>
            <CardMolecule
              metricCardData={{
                cardClass: "rounded-lg w-full sm:w-auto md:w-96 bg-gray-100",
                header: <div className="text-lg font-bold">Welcome</div>,
                body: (
                  <div className="text-4xl text-yellow-600 font-bold">
                    {userName}
                  </div>
                ),
              }}
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 mt-10 justify-between">
          <div className="flex md:flex-row gap-4 justify-end">
            <DashboardCardConfig {...props} />
          </div>
        </div>
      </div>
      <div className="bg-gray mt-16 flex space-x-4 ">
        <ButtonAtom
          overrideClass={
            isStyleOne
              ? "bg-white text-black gap-0.5 w-fit mb-4 rounded-xl"
              : "bg-black gap-0.5 w-fit mb-4 rounded-xl text-white"
          }
          label="PR Creation"
          onClick={() => toggleStyle("pr_creation")}
        />
        <ButtonAtom
          overrideClass={
            isStyleOne
              ? "bg-black gap-0.5 w-fit mb-4 rounded-xl text-white"
              : "bg-white text-black gap-0.5 w-fit mb-4 rounded-xl"
          }
          label="GR Confirmation"
          onClick={() => toggleStyle("gr_confirmation")}
        />
      </div>
      <DashboardTableConfig zone={zone} role={role} table={table} {...props} />
    </div>
  );
}
