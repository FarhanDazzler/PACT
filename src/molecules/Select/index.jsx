import AsyncSelect from "react-select/async";

export default function ReactSelectMolecule({
  options = [],
  label = "",
  className = "",
  value,
  placeholder = "",
  overrideClass = "",
  overrideDropdownClass = "",
  fontFamily = "font-avantt",
  ...props
}) {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      fontFamily: fontFamily,
      borderRadius: "0.5rem", // Rounded border
      borderColor: "black", // Black border
      "&:hover": {
        borderColor: "black",
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0.5rem", // Rounded border for dropdown
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#d1d5db" : null,
      fontFamily: fontFamily, // Grey background on hover
    }),
  };

  return (
    <div className={`flex items-center ${overrideClass}`}>
      <AsyncSelect
        {...props}
        styles={customStyles}
        className={`w-full rounded border-1 border-black font-medium ${overrideDropdownClass}`}
        defaultOptions={options}
        placeholder={placeholder ?? "Select"}
        closeMenuOnSelect
        hideSelectedOptions
        components={{ IndicatorSeparator: () => null }}
        options={options}
      />
    </div>
  );
}
