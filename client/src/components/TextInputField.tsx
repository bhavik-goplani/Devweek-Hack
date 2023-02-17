import { TextInput } from '@mantine/core';
import * as React from "react";

interface IInputProps {
    placeholderText: string;
    label: string;
  }

  export const TextInputField: React.FC<IInputProps> = (props: IInputProps) => {
  return (
    <TextInput
      placeholder={props.placeholderText}
      label={props.label}
      withAsterisk
    />
  );
}