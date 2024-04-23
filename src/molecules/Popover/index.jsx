import { Button, Popover, Text } from "@mantine/core";
import { useState } from "react";

export default function PopoverMolecule({
  label,
  options,
  handleClick,
  overrideClass,
  ...props
}) {
  const [opened, setOpened] = useState(false);

  return (
    <Popover opened={opened} onClose={() => setOpened(false)}>
      <Popover.Target>
        <Button onClick={() => setOpened((o) => !o)} className={overrideClass}>
          {label}
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          {options.map((option, index) => (
            <li key={index}>
              <Text
                onClick={() => {
                  handleClick(option);
                  setOpened(false); // Close the dropdown after selecting an option
                }}
                className="block px-4 py-2 hover:bg-gold dark:hover:bg-gray-600 dark:hover:text-gold cursor-pointer"
              >
                {option}
              </Text>
            </li>
          ))}
        </ul>
      </Popover.Dropdown>
    </Popover>
  );
}
