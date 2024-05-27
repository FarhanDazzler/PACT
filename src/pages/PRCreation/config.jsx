// formConfig.js
export const basicDetailsFields = [
  {
    name: "functionDepartment",
    label: "Function/Department",
    className: "w-1/2",
    options: "options",
  },
  {
    name: "spendType",
    label: "Spend Type",
    className: "w-1/2",
    options: "spendTypeOptions",
    handleChange: "handleSpendTypeChange",
  },
  { name: "prType", label: "PR Type", className: "w-1/2", options: "options" },
  {
    name: "requestType",
    label: "Request Type",
    className: "w-1/2",
    options: "options",
  },
  {
    name: "companyCode",
    label: "Company Code",
    className: "w-1/2",
    options: "options",
    condition: "showCapexFields",
  },
  {
    name: "purchaseOrganization",
    label: "Purchase Organization",
    className: "w-1/2",
    options: "options",
  },
  {
    name: "currency",
    label: "Currency",
    className: "w-1/2",
    options: "options",
  },
  {
    name: "country",
    label: "Country",
    className: "w-1/2",
    options: "options",
    condition: "showCapexFields",
  },
  {
    name: "prCreator",
    label: "PR Creator",
    className: "w-1/2",
    options: "options",
    condition: "showCapexFields",
  },
];

export const vendorPurchaseDetailsFields = [
  {
    name: "itemCategory",
    label: "Item Category",
    className: "w-1/2",
    options: "options",
    condition: "showCapexFields",
  },
  {
    name: "vendor",
    label: "Vendor Name/Number",
    className: "w-1/2",
    options: "options",
  },
  {
    name: "paymentTerm",
    label: "Payment Term",
    className: "w-1/2",
    options: "options",
  },
  {
    name: "materialGroup",
    label: "Material Group",
    className: "w-1/2",
    options: "options",
    condition: "showCapexFields",
  },
  {
    name: "userCopy",
    label: "User Copy on behalf",
    className: "w-1/2",
    options: "options",
    condition: "showCapexFields",
  },
  {
    name: "costCenter",
    label: "Cost Center",
    className: "w-1/2",
    options: "options",
    condition: "showCapexFields",
  },
  {
    name: "gl",
    label: "GL",
    className: "w-1/2",
    options: "options",
    condition: "showCapexFields",
  },
];

export const purchaseDescriptionFields = [
  {
    name: "shortDescription",
    label: "Short Description",
    type: "textarea",
  },
  {
    name: "detailedDescription",
    label: "Detailed Description/Motivation of Purchase",
    type: "textarea",
  },
  {
    name: "deliveryAddress",
    label: "Delivery Address",
    className: "w-1/2",
    options: "options",
  },
];

export const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
];

export const spendTypeOptions = [
  { value: "capex", label: "Capex" },
  { value: "opex", label: "Opex" },
];
