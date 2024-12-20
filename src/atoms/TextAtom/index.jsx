import { TextInput } from "@mantine/core";

export default function TextAtom({
  label,
  placeHolder,
  ovverrideClass,
  ...props
}) {
  return (
    <TextInput
      className={`${ovverrideClass}`}
      label={label}
      placeholder={placeHolder}
    />
  );
}
