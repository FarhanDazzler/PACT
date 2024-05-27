import { Button, Flex } from "@mantine/core";
import { useFormikContext } from "formik";
import {
  MRT_GlobalFilterTextInput,
  MantineReactTable,
  useMantineReactTable,
} from "mantine-react-table";
import React, { useEffect, useMemo, useState } from "react";
import { FaDownload } from "react-icons/fa";
import * as XLSX from "xlsx";
import useWindowDimensions from "../../utils/hooks";

export default function GenericTableComponent({
  columnData: initialColumns,
  data: initialData,
  columnFilterModes = false,
  enableGrouping = false,
  showExport = false,
  showCartButton = false,
  showPagination = true,
  editable = false,
  onSelectedRowsChange = () => {},
  onCellEdit = () => {},
  onTableDataChange, // Add this prop to handle table data changes
  ...props
}) {
  const [tableData, setTableData] = useState(initialData);
  let formikContext;

  try {
    formikContext = useFormikContext();
  } catch (error) {
    formikContext = null;
  }

  const { width } = useWindowDimensions();
  const getColumnWidth = () => {
    if (width < 600) return "50px"; // Small screens
    if (width < 960) return "100px"; // Medium screens
    return "150px"; // Large screens
  };

  const columns = useMemo(
    () =>
      initialColumns.map((col) => ({
        ...col,
        size: getColumnWidth(),
      })),
    [initialColumns, getColumnWidth, onCellEdit]
  );

  const handleSaveCell = (cell, value) => {
    const newData = [...tableData];
    newData[cell.row.index][cell.column.id] = value;
    setTableData(newData);
  };

  useEffect(() => {
    // Update parent component whenever tableData changes
    if (onTableDataChange) {
      onTableDataChange(tableData);
    }
  }, [tableData, onTableDataChange]);

  const handleAddRow = () => {
    setTableData((prevData) => [
      ...prevData,
      {
        ...initialColumns.reduce(
          (acc, col) => ({ ...acc, [col.accessorKey]: "" }),
          {}
        ),
      },
    ]);
  };

  const handleDeleteRow = (index) => {
    setTableData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const editTableCellProps = ({ cell }) => ({
    onBlur: (event) => handleSaveCell(cell, event.target.value),
    variant: "unstyled",
  });

  const table = useMantineReactTable({
    columns,
    data: tableData,
    enableColumnFilterModes: columnFilterModes,
    editDisplayMode: "table",
    enableColumnOrdering: true,
    enableFacetedValues: true,
    enableGrouping: enableGrouping,
    enablePinning: true,
    enableStickyFooter: true,
    memoMode: "cells",
    enableEditing: editable,
    enableRowSelection: true,
    initialState: {
      showColumnFilters: false,
      showGlobalFilter: true,
      density: "xs",
    },
    enablePagination: showPagination,
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
          fontSize: "xs",
          whiteSpace: "normal",
          wordWrap: "break-word",
        },
      },
    },
    renderTopToolbar: ({ table }) => {
      const handleExportRows = (rows) => {
        const columnHeaders = columns.map((item) => item.accessorKey);
        const data = rows.map((row) => {
          const rowData = {};
          columnHeaders.forEach((column) => {
            rowData[column] = row.original[column];
          });
          return rowData;
        });

        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "ExportedData.xlsx");
      };

      const handleExportAllRows = (data) => {
        const columnHeaders = columns.map((item) => item.accessorKey);
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
        XLSX.writeFile(workbook, "ExportedData.xlsx");
      };

      const handleAddToCart = () => {
        const selectedRows = table
          .getSelectedRowModel()
          .rows.map((row) => row.original);
        if (formikContext) {
          formikContext.setFieldValue("cart", [
            ...formikContext.values.cart,
            ...selectedRows,
          ]);
        }
        onSelectedRowsChange(selectedRows);
      };

      return (
        <Flex p="md" justify="space-between">
          <Flex gap="xs">
            <MRT_GlobalFilterTextInput table={table} />
          </Flex>

          <Flex sx={{ gap: "8px" }}>
            {showExport && (
              <>
                <Button
                  onClick={() => handleExportAllRows(tableData)}
                  leftIcon={<FaDownload />}
                  variant="filled"
                >
                  Export All Data
                </Button>
                <Button
                  disabled={table.getRowModel().rows.length === 0}
                  onClick={() => handleExportRows(table.getRowModel().rows)}
                  leftIcon={<FaDownload />}
                  variant="filled"
                >
                  Export Page Rows
                </Button>
                <Button
                  disabled={
                    !table.getIsSomeRowsSelected() &&
                    !table.getIsAllRowsSelected()
                  }
                  onClick={() =>
                    handleExportRows(table.getSelectedRowModel().rows)
                  }
                  leftIcon={<FaDownload />}
                  variant="filled"
                >
                  Export Selected Rows
                </Button>
              </>
            )}
            {showCartButton && (
              <Button
                disabled={
                  !table.getIsSomeRowsSelected() &&
                  !table.getIsAllRowsSelected()
                }
                onClick={handleAddToCart}
                color="yellow"
                variant="filled"
              >
                Add to Cart
              </Button>
            )}
            {editable && (
              <Button onClick={handleAddRow} color="yellow" variant="filled">
                Click here to Add More line items
              </Button>
            )}
          </Flex>
        </Flex>
      );
    },
  });

  return (
    <>
      <MantineReactTable
        table={table}
        mantineEditTextInputProps={editable ? editTableCellProps : undefined}
      />
    </>
  );
}
