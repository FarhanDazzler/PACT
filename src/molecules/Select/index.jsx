import { MultiSelect, Select } from "@mantine/core";
import { useState } from "react";

export default function SelectMolecule({
  label = "",
  placeholder = "",
  options = [],
  multi = false,
  readOnly = false,
  ...props
}) {
  const [searchValue, setSearchValue] = useState("");

  return multi ? (
    <MultiSelect
      label={label}
      placeholder={placeholder}
      data={options}
      clearable
      nothingFoundMessage="No Results"
      readOnly={readOnly}
    />
  ) : (
    <Select
      label={label}
      placeholder={placeholder}
      data={options}
      clearable
      styles={{
        input: {
          "&:focus": { borderColor: "#e3af32" },
        },
        selected: { color: "#e3af32", backgroundColor: "#e3af3221" },
        hovered: { color: "#e3af32", backgroundColor: "#e3af3221" },
      }}
    />
  );
}
