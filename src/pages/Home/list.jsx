import React, { useEffect, useState } from "react";
import DynamicTableOrganism from "../../organisms/DynamicTable";
import { getApi } from "../../particles/api";

export default function DashboardTableConfig(props) {
  const { zone, role, ...restProps } = props;
  const [data, setData] = useState([]);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getApi({
          routes: "pr_details",
          headers: {
            User_id: userId,
          },
        });
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]); // Include userId as a dependency to avoid warning

  return (
    <DynamicTableOrganism {...getConfig({ zone, role, ...restProps }, data)} />
  );
}

const getConfig = ({ zone, role, ...rest }, data) => {
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
    columnData: config.columns,
    data: config.data,
    showExport: true,
  };
};
