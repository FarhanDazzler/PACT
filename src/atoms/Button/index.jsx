import { Button } from "@mantine/core";

export default function ButtonAtom({
  label,
  onClick,
  overrideClass,
  ...props
}) {
  return (
    <Button className={overrideClass} onClick={onClick}>
      {label}
    </Button>
  );
}
