import { Button } from "@mantine/core";

export default function ButtonAtom({
  label,
  overrideClass,
  onClick,
  ...props
}) {
  return (
    <Button variant={props.variant} className={overrideClass} onClick={onClick}>
      {label}
    </Button>
  );
}
