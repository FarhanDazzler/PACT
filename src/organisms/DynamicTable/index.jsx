import { Table } from "@mantine/core";

export default function DynamicTableOrganism({ headers, elements }) {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      {headers.map((header) => (
        <Table.Td key={header.key}>{element[header.key]}</Table.Td>
      ))}
    </Table.Tr>
  ));

  return (
    //Not yet Completed still this is in development.
    <Table>
      <Table.Thead>
        <Table.Tr>
          {headers.map((header) => (
            <Table.Th key={header.key}>{header.label}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
