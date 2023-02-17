import { TextInput } from "@mantine/core";
import * as React from "react";

interface IInputProps {
  placeholderText: string;
  label: string;
}

export const TextInputField: React.FC<IInputProps> = (props: IInputProps) => {
  return (
    <div style={{ width: 240,marginLeft: "auto", marginRight: "auto", marginBottom:30}}>
      <TextInput
        placeholder={props.placeholderText}
        label={props.label}
        withAsterisk
      />
    </div>
  );
};
