import { Button } from "@mantine/core";

export default function ButtonAtom({ label, overrideClass, ...props }) {
  return (
    <Button variant={props.variant} className={overrideClass}>
      {label}
    </Button>
  );
}
