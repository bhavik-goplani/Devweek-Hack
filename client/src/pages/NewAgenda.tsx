import * as React from "react";
import { Text, Button } from "@mantine/core";
import AgendaTemplateSelect from "../components/AgendaTemplateSelect";

const NewAgenda = () => {
  return (
    <>
      <Text>New Agenda Template</Text>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AgendaTemplateSelect />
      </div>
      <a href="/DisplayAgenda">
        <Button>Next</Button>
      </a>
    </>
  );
};

export default NewAgenda;
