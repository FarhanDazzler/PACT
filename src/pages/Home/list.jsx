import React, { useState, useEffect } from "react";
import DynamicTableOrganism from "../../organisms/DynamicTable";

export default function DashboardTableConfig(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPrDetails(); // Fetch data when the component mounts
  }, []);

  const fetchPrDetails = () => {
    // Fetch data from your backend API
    fetch("/pr_details")
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Update the state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching PR details:", error);
      });
  };

  return <DynamicTableOrganism {...getConfig(props, data)} />;
}

const getConfig = ({ zone, role }, data) => {
  let config = {};
  switch (`${zone}/${role}`) {
    default:
      config = {
        columns: [
          {
            accessorKey: "requestID",
            header: "Request ID",
            size: 50,
          },
          {
            accessorKey: "region",
            header: "Region",
            size: 10,
          },
          {
            accessorKey: "submissionDate",
            header: "Submission Date",
            size: 10,
          },
          {
            accessorKey: "approvedDate",
            header: "Approved Date",
            size: 10,
          },
          {
            accessorKey: "prType",
            header: "PR Type",
            size: 10,
          },
          {
            accessorKey: "vendorName",
            header: "Vendor Name",
            size: 10,
          },
          {
            accessorKey: "vendorNumber",
            header: "Vendor Number",
            size: 10,
          },
          {
            accessorKey: "poTitle",
            header: "PO Title",
            size: 10,
          },
          {
            accessorKey: "currency",
            header: "Currency",
            size: 10,
          },
          {
            accessorKey: "poValue",
            header: "PO Value",
            size: 10,
          },
          {
            accessorKey: "status",
            header: "Status",
            size: 10,
          },
        ],
        data: data || [],
      };
      break;
  }

  return {
    columnData: config?.columns,
    data: config?.data,
    showExport: true,
  };
};
