import React, { useEffect, useState } from "react";
import DynamicTableOrganism from "../../organisms/DynamicTable";

export default function LineItemsTableConfig({
  setFieldValue = () => {},
  values,
}) {
  const initialData = [
    {
      itemNo: "",
      description: "",
      deliveryDate: "",
      plant: "",
      materialGroup: "",
      materialCode: "",
      currency: "",
      ccwbs: "",
      gl: "",
      quantity: "",
      uom: "",
      pricePerItem: "",
      totalValue: "",
    },
  ];

  const [tableData, setTableData] = useState(values.line_items || initialData);

  useEffect(() => {
    setTableData(values.line_items || initialData);
  }, [values.line_items]);

  useEffect(() => {
    setFieldValue("line_items", tableData);
  }, [tableData, setFieldValue]);

  return (
    <DynamicTableOrganism
      {...getConfig({ tableData, setTableData, setFieldValue, values })}
    />
  );
}

const getConfig = ({ tableData: data, setTableData, ...rest }) => {
  const columnData = [
    { accessorKey: "itemNo", header: "Item No" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "deliveryDate", header: "Delivery Date" },
    { accessorKey: "plant", header: "Plant" },
    { accessorKey: "materialGroup", header: "Material Group" },
    { accessorKey: "materialCode", header: "Material Code" },
    { accessorKey: "currency", header: "Currency" },
    { accessorKey: "ccwbs", header: "CC/WBS" },
    { accessorKey: "gl", header: "GL" },
    { accessorKey: "quantity", header: "Quantity" },
    { accessorKey: "uom", header: "UOM" },
    { accessorKey: "pricePerItem", header: "Price per Item" },
    { accessorKey: "totalValue", header: "Total Value" },
  ];

  return {
    columnData: columnData,
    data,
    showExport: false,
    showCartButton: false,
    showPagination: false,
    editable: true,
    onTableDataChange: setTableData,
    ...rest,
  };
};
