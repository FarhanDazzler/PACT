import ButtonAtom from "../../atoms/Button";
import CardMolecule from "../../molecules/Card";
import DashboardCardConfig from "./cardConfig";
import DashboardTableConfig from "./list";

export default function DashboardComponent({ zone = "", role = "", ...props }) {
  return (
    <div>
      <div className="pt-10 lg:gap-4 min-h-full border-opacity-60 flex flex-col lg:flex-row justify-between items-start">
        <div className="w-full lg:w-1/2  mb-4 lg:mb-0 mt-16">
          <div>
            <CardMolecule
              metricCardData={{
                cardClass: "rounded-lg w-full sm:w-auto md:w-96 bg-gray-100",
                header: (
                  <div className="font-avantt text-md font-bold">Welcome</div>
                ),
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
      <div className="bg-gray mt-16 ">
        <ButtonAtom
          overrideClass="font-avantt bg-black w-32 mb-4 rounded-xl"
          label="PR Creation"
        />
      </div>
      <DashboardTableConfig />
    </div>
  );
}
