import { useContext } from "react";
import { OptionsContext } from "../../context/optionContext";

export default function FormConfig() {
  const { options } = useContext(OptionsContext);

  const basicDetailsFields = [
    {
      name: "function/department",
      label: "Function/Department",
      className: "w-1/2",
      options: options["function_department"],
    },
    {
      name: "spend_type",
      label: "Spend Type",
      className: "w-1/2",
      options: options?.spend_type,
      handleChange: "handleSpendTypeChange",
    },
    {
      name: "request_priority",
      label: "Request Priority",
      className: "w-1/2",
      options: options?.request_priority,
    },
    {
      name: "request_type",
      label: "Request Type",
      className: "w-1/2",
      options: options?.request_type,
    },
    {
      name: "company_code",
      label: "Company Code",
      className: "w-1/2",
      options: options?.company_code,
      condition: "showCapexFields",
    },
    {
      name: "purchase_organization",
      label: "Purchase Organization",
      className: "w-1/2",
      options: options?.purchase_organization,
    },
    {
      name: "currency",
      label: "Currency",
      className: "w-1/2",
      options: options?.currency,
    },
    {
      name: "country",
      label: "Country",
      className: "w-1/2",
      options: options?.country,
      condition: "showCapexFields",
    },
    {
      name: "pr_creator",
      label: "PR Creator",
      className: "w-1/2",
      options: options?.pr_creator,
      condition: "showCapexFields",
    },
  ];
  const vendorPurchaseDetailsFields = [
    {
      name: "item_category",
      label: "Item Category",
      className: "w-1/2",
      options: options?.item_category,
      condition: "showCapexFields",
    },
    {
      name: "vendor",
      label: "Vendor Name/Number",
      className: "w-1/2",
      options: options?.vendor,
    },
    {
      name: "payment_term",
      label: "Payment Term",
      className: "w-1/2",
      options: options?.payment_term,
    },
    {
      name: "material_group",
      label: "Material Group",
      className: "w-1/2",
      options: options?.material_group,
      condition: "showCapexFields",
    },
    {
      name: "user_copy",
      label: "User Copy on behalf",
      className: "w-1/2",
      options: options?.user_copy,
      condition: "showCapexFields",
    },
    {
      name: "cost_center",
      label: "Cost Center",
      className: "w-1/2",
      options: options?.cost_center,
      condition: "showCapexFields",
    },

    {
      name: "gl",
      label: "GL",
      className: "w-1/2",
      options: options?.gl,
      condition: "showCapexFields",
    },
  ];
  const purchaseDescriptionFields = [
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
      options: options?.delivery_address,
    },
  ];
  return {
    basicDetailsFields,
    vendorPurchaseDetailsFields,
    purchaseDescriptionFields,
  };
}
