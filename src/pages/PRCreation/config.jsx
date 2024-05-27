// formConfig.js

export const basicDetailsFields = [
  {
    name: "function_department",
    label: "Function/Department",
    className: "w-1/2",
    options: "options",
  },
  {
    name: "spend_type",
    label: "Spend Type",
    className: "w-1/2",
    options: "spendTypeOptions",
    handleChange: "handleSpendTypeChange",
  },
  {
    name: "request_priority",
    label: "Request Priority",
    className: "w-1/2",
    options: "requestPriorityOptions",
  },
  {
    name: "request_type",
    label: "Request Type",
    className: "w-1/2",
    options: "requestTypeOptions",
  },
  {
    name: "company_code",
    label: "Company Code",
    className: "w-1/2",
    options: "options",
    condition: "showCapexFields",
  },
  {
    name: "purchase_organization",
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
    name: "pr_creator",
    label: "PR Creator",
    className: "w-1/2",
    options: "options",
    condition: "showCapexFields",
  },
];

export const vendorPurchaseDetailsFields = [
  {
    name: "item_category",
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
    name: "payment_term",
    label: "Payment Term",
    className: "w-1/2",
    options: "options",
  },
  {
    name: "material_group",
    label: "Material Group",
    className: "w-1/2",
    options: "options",
    condition: "showCapexFields",
  },
  {
    name: "user_copy",
    label: "User Copy on behalf",
    className: "w-1/2",
    options: "options",
    condition: "showCapexFields",
  },
  {
    name: "cost_center",
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
    name: "short_description",
    label: "Short Description",
    type: "textarea",
  },
  {
    name: "detailed_description",
    label: "Detailed Description/Motivation of Purchase",
    type: "textarea",
  },
  {
    name: "delivery_address",
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

export const requestTypeOptions = [
  { value: "material", label: "Material" },
  { value: "invoice", label: "Invoice" },
];

export const requestPriorityOptions = [
  { value: "normal", label: "Normal" },
  { value: "urgent", label: "Urgent" },
];
