import * as React from "react";
import { Text, Button } from "@mantine/core";
import AgendaDataNestedList from "../components/AgendaDataNestedList";

const DisplayAgenda = () => {
  return (
    <>
     <a href= "/NewAgenda">
      <div text-align="left">
        <Button>Back</Button>
      </div>
      </a>


      <Text size="lg" style={{ marginTop: 20 }}>
        Meeting Agenda
      </Text>
      <AgendaDataNestedList />
    </>
  );
};

export default DisplayAgenda;
