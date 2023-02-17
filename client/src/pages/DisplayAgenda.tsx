import * as React from "react";
import { Text, Button } from "@mantine/core";
import AgendaDataNestedList from "../components/AgendaDataNestedList";

const DisplayAgenda = () => {
  return (
    <>
      <Button>Back</Button>
      <Text>Display Agenda</Text>
      <AgendaDataNestedList />
    </>
  );
};

export default DisplayAgenda;
