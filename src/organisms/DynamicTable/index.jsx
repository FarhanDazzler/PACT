import { Button, Flex } from "@mantine/core";
import {
  MRT_GlobalFilterTextInput,
  // MRT_ToggleFiltersButton,
  MantineReactTable,
  useMantineReactTable,
} from "mantine-react-table";
import { useMemo } from "react";
import { FaDownload } from "react-icons/fa";
import * as XLSX from "xlsx";

export default function DynamicTableOrganism({
  columnData = [],
  columnFilterModes = false,
  enableGrouping = false,
  data,
  ...props
}) {
  const table = useMantineReactTable({
    columns: useMemo(() => columnData, [columnData]),
    data: useMemo(() => data, []),
    enableColumnFilterModes: false,
    enableColumnOrdering: true,
    enableFacetedValues: true,
    enableGrouping: true,
    enablePinning: true,
    enableStickyFooter: true,
    memoMode: "cells",
    enableRowSelection: true,
    initialState: {
      showColumnFilters: false,
      showGlobalFilter: true,
      density: "xs",
    },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    mantinePaginationProps: {
      radius: "lg",
      size: "md",
    },
    enableColumnDragging: false,
    columnResizeMode: true,
    mantineSearchTextInputProps: {
      placeholder: "Search",
    },
    mantineTableProps: {
      highlightOnHover: true,
      withColumnBorders: false,
      withBorder: true,
      striped: true,
      classNames: "font-avantt rounded-5xl",
      sx: {
        "thead > tr": {
          backgroundColor: "lightgray",
          fontWeight: "bolder",
        },
        "thead > tr > th": {
          backgroundColor: "inherit",
        },
        "tbody > tr > td": {
          backgroundColor: "inherit",
          fontWeight: "normal",
        },
      },
    },
    // enableColumnActions: true,
    renderTopToolbar: ({ table }) => {
      const handleExportRows = (rows) => {
        const columnHeaders = columnData?.map((item) => item?.accessorKey);
        const data = rows.map((row) => {
          const rowData = {};
          columnHeaders.forEach((column) => {
            rowData[column] = row?.original[column];
          });
          return rowData;
        });

        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "PR Creation.xlsx");
      };

      const handleExportAllRows = (data) => {
        const columnHeaders = columnData?.map((item) => item?.accessorKey);
        const allData = data.map((row) => {
          const rowData = {};
          columnHeaders.forEach((column) => {
            rowData[column] = row[column];
          });
          return rowData;
        });

        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(allData);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "PR Creation.xlsx");
      };

      return (
        <Flex p="md" justify="space-between">
          <Flex gap="xs">
            <MRT_GlobalFilterTextInput table={table} />
            {/* <MRT_ToggleFiltersButton table={table} /> */}
            {/* <MRT_ToggleDensePaddingButton table={table} /> */}
          </Flex>
          <Flex sx={{ gap: "8px" }}>
            <Button
              color="lightblue"
              //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
              onClick={() => handleExportAllRows(data)}
              leftIcon={<FaDownload />}
              variant="filled"
            >
              Export All Data
            </Button>
            <Button
              disabled={table.getRowModel().rows.length === 0}
              //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
              onClick={() => handleExportRows(table.getRowModel().rows)}
              leftIcon={<FaDownload />}
              variant="filled"
            >
              Export Page Rows
            </Button>
            <Button
              disabled={
                !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
              }
              //only export selected rows
              onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
              leftIcon={<FaDownload />}
              variant="filled"
            >
              Export Selected Rows
            </Button>
          </Flex>
        </Flex>
      );
    },
  });

  return <MantineReactTable table={table} />;
}
