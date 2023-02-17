import * as React from "react";
import { Text, Button } from "@mantine/core";
import AgendaTemplateSelect from "../components/AgendaTemplateSelect";

const NewAgenda = () => {
  return (
    <>
      <Text>New Agenda Template</Text>
      <AgendaTemplateSelect />
      <a href="/DisplayAgenda">
        <Button>Next</Button>
      </a>
      
    </>
  );
};

export default NewAgenda;
