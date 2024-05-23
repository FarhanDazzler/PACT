import DynamicTableOrganism from "../../organisms/DynamicTable";

export default function PRCreationLineItemsConfig(props) {
  return <DynamicTableOrganism {...getConfig(props)} />;
}

const getConfig = ({ zone, role, ...rest }) => {
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

  let config = {};
  switch (`${zone}/${role}`) {
    default:
      config = {
        columns: [
          { accessorKey: "quantity", header: "Quantity", size: 1 },
          { accessorKey: "hyperlink", header: "Hyperlink", size: 1 },
          { accessorKey: "category", header: "Category", size: 1 },
          {
            accessorKey: "shortDescription",
            header: "Short Description",
            size: 1,
          },
          {
            accessorKey: "priceInformation",
            header: "Price Information",
            size: 1,
          },
          { accessorKey: "priceBaseQty", header: "Price Base Qty", size: 1 },
          { accessorKey: "unitOfMeasure", header: "Unit of Measure", size: 1 },
        ],
        columnWidths: {
          quantity: "80px",
          hyperlink: "200px",
          category: "200px",
          shortDescription: "250px",
          priceInformation: "150px",
          priceBaseQty: "100px",
          unitOfMeasure: "100px",
        },
        data: data || [],
        showExport: false,
        showCartButton: true,
        showPagination: false,
      };
      break;
  }

  return {
    columnData: config?.columns,
    data: config?.data,
    columnWidths: config?.columnWidths,
    showExport: false,
    showCartButton: true,
    formikField: "selectedRows",
    ...config,
  };
};
