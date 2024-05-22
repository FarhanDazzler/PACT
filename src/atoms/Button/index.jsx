import { Button } from "@mantine/core";

export default function ButtonAtom({
  label,
  onClick,
  overrideClass,
  ...props
}) {
  return (
    <Button variant={props.variant} className={overrideClass} onClick={onClick}>
      {label}
    </Button>
  );
}
