import ButtonAtom from "../../atoms/Button";
import CardMolecule from "../../molecules/Card";
import DashboardCardConfig from "./cardConfig";
import DashboardTableConfig from "./list";

export default function DashboardComponent({ zone = "", role = "", ...props }) {
  return (
    <>
      <div className="pt-10 px-4 lg:px-10 lg:gap-4 min-h-full border-opacity-60 flex flex-col lg:flex-row justify-between items-start">
        <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0 mt-16">
          <div className="pl-4 ml-10 lg:pl-0">
            <CardMolecule
              metricCardData={{
                cardClass: "rounded-lg w-full sm:w-auto md:w-96 bg-gray-100",
                header: <div className="font-avantt text-md">Welcome</div>,
                body: (
                  <div className="font-avantt text-4xl text-yellow-600 font-bold">
                    Samuel J.
                  </div>
                ),
              }}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-20">
          <div className="flex lg:flex-row lg:justify-end lg:items-end gap-4">
            <DashboardCardConfig {...props} />
          </div>
        </div>
      </div>
      <div className="bg-gray mt-16 px-3 ">
        <ButtonAtom
          overrideClass="font-avantt ml-20 bg-black w-32 mb-4 rounded-xl"
          label="PR Creation"
        />
      </div>
      <div className="h-10 ml-20 w-11/12">
        <DashboardTableConfig />
      </div>
    </>
  );
}
