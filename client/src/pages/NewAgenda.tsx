import * as React from "react";
import { Text, Button } from "@mantine/core";
import AgendaTemplateSelect from "../components/AgendaTemplateSelect";

const NewAgenda = () => {
  return (
    <>
      <Text>New Agenda Template</Text>
      <AgendaTemplateSelect />
      <Button>Next</Button>
    </>
  );
};

export default NewAgenda;
