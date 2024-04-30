import AsyncSelect from "react-select/async";

export default function ReactSelectMolecule({
  options = [],
  label = "",
  className = "",
  value,
  placeholder = "",
  overrideClass = "",
  overrideDropdownClass = "",
  fontFamily = "inherit",
  ...props
}) {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      fontFamily: fontFamily, // Apply the specified font family
    }),
  };

  return (
    <div className={`flex items-center rounded-3xl gap-1 ${overrideClass}`}>
      <AsyncSelect
        {...props}
        styles={customStyles}
        className={`w-52 rounded border-1 border-disabled font-semibold${overrideDropdownClass}`}
        defaultOptions={options}
        // loadOptions={loadOptions}
        placeholder={placeholder ?? "Select"}
        closeMenuOnSelect
        hideSelectedOptions
        components={{ IndicatorSeparator: () => null }}
        options={options}
        // key={props?.accessor}
      />
    </div>
  );
}
