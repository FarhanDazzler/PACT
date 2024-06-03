import CardMolecule from "../molecules/Card";
import PopoverMolecule from "../molecules/Popover";
import ReactSelectMolecule from "../molecules/Select";
import DynamicTableOrganism from "../organisms/DynamicTable";

export const showUI = (name, props) => {
  const newProps = { ...props };
  switch (name) {
    case "card":
      return <CardMolecule {...newProps} />;
    case "popover":
      return <PopoverMolecule {...newProps} />;
    case "reactselect":
      return <ReactSelectMolecule {...newProps} />;
    case "dynamicList":
      return <DynamicTableOrganism {...newProps} />;

    default:
      return <></>;
  }
};
