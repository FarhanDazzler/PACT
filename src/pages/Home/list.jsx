import { useEffect, useState } from "react";
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

const getConfig = ({ zone, role, table, ...rest }) => {
  console.log(role, table, zone);
  const data = [
    {
      requestID: "REQ-1443434004",
      region: "GHQ",
      submissionDate: "23-03-2024",
      approvedDate: "23-03-2024",
      prType: "Urgent",
      vendorName: "Accenture NV",
      vendorNumber: "321456",
      poTitle: "Acuvate santhosh billing",
      currency: "INR",
      poValue: "INR",
      status: "Pending Approval",
    },
    {
      requestID: "REQ-1443434004",
      region: "GHQ",
      submissionDate: "23-03-2024",
      approvedDate: "23-03-2024",
      prType: "Urgent",
      vendorName: "Accenture NV",
      vendorNumber: "321456",
      poTitle: "Acuvate santhosh billing",
      currency: "INR",
      poValue: "INR",
      status: "Pending Approval",
    },
    {
      requestID: "REQ-1443434004",
      region: "GHQ",
      submissionDate: "23-03-2024",
      approvedDate: "23-03-2024",
      prType: "Urgent",
      vendorName: "Accenture NV",
      vendorNumber: "321456",
      poTitle: "Acuvate santhosh billing",
      currency: "INR",
      poValue: "INR",
      status: "Pending Approval",
    },
    {
      requestID: "REQ-1443434004",
      region: "GHQ",
      submissionDate: "23-03-2024",
      approvedDate: "23-03-2024",
      prType: "Normal",
      vendorName: "Accenture NV",
      vendorNumber: "321456",
      poTitle: "Acuvate santhosh billing",
      currency: "INR",
      poValue: "INR",
      status: "Pending Approval",
    },
    {
      requestID: "REQ-1443434004",
      region: "GHQ",
      submissionDate: "23-03-2024",
      approvedDate: "23-03-2024",
      prType: "Urgent",
      vendorName: "Accenture NV",
      vendorNumber: "321456",
      poTitle: "Acuvate santhosh billing",
      currency: "INR",
      poValue: "INR",
      status: "Pending Approval",
    },
    {
      requestID: "REQ-1443434004",
      region: "GHQ",
      submissionDate: "23-03-2024",
      approvedDate: "23-03-2024",
      prType: "Urgent",
      vendorName: "Accenture NV",
      vendorNumber: "321456",
      poTitle: "Acuvate santhosh billing",
      currency: "INR",
      poValue: "INR",
      status: "Pending Approval",
    },
    {
      requestID: "REQ-1443434004",
      region: "GHQ",
      submissionDate: "23-03-2024",
      approvedDate: "23-03-2024",
      prType: "Urgent",
      vendorName: "Accenture NV",
      vendorNumber: "321456",
      poTitle: "Acuvate santhosh billing",
      currency: "INR",
      poValue: "INR",
      status: "Pending Approval",
    },
    {
      requestID: "REQ-1443434004",
      region: "GHQ",
      submissionDate: "23-03-2024",
      approvedDate: "23-03-2024",
      prType: "Urgent",
      vendorName: "Accenture NV",
      vendorNumber: "321456",
      poTitle: "Acuvate santhosh billing",
      currency: "INR",
      poValue: "INR",
      status: "Pending Approval",
    },
    {
      requestID: "REQ-1443434004",
      region: "GHQ",
      submissionDate: "23-03-2024",
      approvedDate: "23-03-2024",
      prType: "Normal",
      vendorName: "Accenture NV",
      vendorNumber: "321456",
      poTitle: "Acuvate santhosh billing",
      currency: "INR",
      poValue: "INR",
      status: "Pending Approval",
    },
    {
      requestID: "REQ-1443434004",
      region: "GHQ",
      submissionDate: "23-03-2024",
      approvedDate: "23-03-2024",
      prType: "Urgent",
      vendorName: "Accenture NV",
      vendorNumber: "321456",
      poTitle: "Acuvate santhosh billing",
      currency: "INR",
      poValue: "INR",
      status: "Pending Approval",
    },
    {
      requestID: "REQ-1443434004",
      region: "GHQ",
      submissionDate: "23-03-2024",
      approvedDate: "23-03-2024",
      prType: "Urgent",
      vendorName: "Accenture NV",
      vendorNumber: "321456",
      poTitle: "Acuvate santhosh billing",
      currency: "INR",
      poValue: "INR",
      status: "Pending Approval",
    },
    {
      requestID: "REQ-1443434004",
      region: "GHQ",
      submissionDate: "23-03-2024",
      approvedDate: "23-03-2024",
      prType: "Urgent",
      vendorName: "Accenture NV",
      vendorNumber: "321456",
      poTitle: "Acuvate santhosh billing",
      currency: "INR",
      poValue: "INR",
      status: "Pending Approval",
    },
    {
      requestID: "REQ-1443434004",
      region: "GHQ",
      submissionDate: "23-03-2024",
      approvedDate: "23-03-2024",
      prType: "Urgent",
      vendorName: "Accenture NV",
      vendorNumber: "321456",
      poTitle: "Acuvate santhosh billing",
      currency: "INR",
      poValue: "INR",
      status: "Pending Approval",
    },
    {
      requestID: "REQ-1443434004",
      region: "GHQ",
      submissionDate: "23-03-2024",
      approvedDate: "23-03-2024",
      prType: "Normal",
      vendorName: "Accenture NV",
      vendorNumber: "321456",
      poTitle: "Acuvate santhosh billing",
      currency: "INR",
      poValue: "INR",
      status: "Pending Approval",
    },
    {
      requestID: "REQ-1443434004",
      region: "GHQ",
      submissionDate: "23-03-2024",
      approvedDate: "23-03-2024",
      prType: "Urgent",
      vendorName: "Accenture NV",
      vendorNumber: "321456",
      poTitle: "Acuvate santhosh billing",
      currency: "INR",
      poValue: "INR",
      status: "Pending Approval",
    },
  ];
  console.log(zone, role);
  let config = {};
  switch (
    `${zone?.toLowerCase()}/${role?.toLowerCase()}/${table?.toLowerCase()}`
  ) {
    case "afr/requestor/pr_creation":
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
    case "afr/requestor/gr_confirmation":
      config = {
        columns: [
          {
            accessorKey: "requestID",
            header: "Request ID",
            size: 50,
          },
          {
            accessorKey: "PoNumber",
            header: "PO Number",
            size: 10,
          },
          {
            accessorKey: "poTitle",
            header: "PO Title",
            size: 10,
          },
          {
            accessorKey: "vendorName",
            header: "Vendor Name",
            size: 10,
          },
          {
            accessorKey: "currency",
            header: "Currency",
            size: 10,
          },
          {
            accessorKey: "poQuantity",
            header: "Total PO Quantity",
            size: 10,
          },
          {
            accessorKey: "grDelivered",
            header: "GR Delivered",
            size: 10,
          },
          {
            accessorKey: "remainingQuantity",
            header: "Remaining Quantity",
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
