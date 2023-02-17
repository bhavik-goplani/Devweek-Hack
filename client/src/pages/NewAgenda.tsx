import * as React from "react";
import { Text } from "@mantine/core";
import AgendaTemplateSelect from "../components/AgendaTemplateSelect";

const NewAgenda = () => {
  return (
    <>
      <Text>New Agenda</Text>
      <AgendaTemplateSelect />
    </>
  );
};

export default NewAgenda;
