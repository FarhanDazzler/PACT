import DynamicTableOrganism from "../../organisms/DynamicTable";

export default function PRCreationLineItemsConfig({ setSelectedRows }) {
  return (
    <DynamicTableOrganism setSelectedRows={setSelectedRows} {...getConfig()} />
  );
}

const getConfig = () => {
  const data = [
    {
      quantity: 1,
      hyperlink: "https://www.hyperlink.redirect...",
      category: "MARKETING SERVICES BTL Agency Services & Events",
      shortDescription: "Driver per Day (inc mgt free and margin)",
      priceInformation: "875.00 ZAR",
      priceBaseQty: "1 Day",
      unitOfMeasure: "Day",
    },
    {
      quantity: 1,
      hyperlink: "https://www.hyperlink.redirect...",
      category: "MARKETING SERVICES BTL Agency Services & Events",
      shortDescription: "Driver per Day (inc mgt free and margin)",
      priceInformation: "875.00 ZAR",
      priceBaseQty: "1 Day",
      unitOfMeasure: "Day",
    },
  ];

  let config = {
    columns: [
      {
        accessorKey: "quantity",
        header: "Quantity",
        size: 1,
        enableEditing: true,
      },
      { accessorKey: "hyperlink", header: "Hyperlink", size: 1 },
      { accessorKey: "category", header: "Category", size: 1 },
      { accessorKey: "shortDescription", header: "Short Description", size: 1 },
      { accessorKey: "priceInformation", header: "Price Information", size: 1 },
      {
        accessorKey: "priceBaseQty",
        header: "Price Base Qty",
        size: 1,
        enableEditing: true,
      },
      { accessorKey: "unitOfMeasure", header: "Unit of Measure", size: 1 },
    ],
    data: data || [],
    showExport: false,
    showCartButton: true,
    showPagination: false,
  };

  return {
    columnData: config.columns,
    data: config.data,
    showExport: config.showExport,
    showCartButton: config.showCartButton,
    showPagination: config.showPagination,
  };
};
