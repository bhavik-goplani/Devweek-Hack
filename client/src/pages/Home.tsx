import * as React from "react";
import { Stack, Text, Button } from "@mantine/core";
import AgendaDataNestedList from "../components/AgendaDataNestedList";

const Home = () => {
  return (
    <Stack sx={(theme) => ({  height: 300 })}>
      <Text>Home</Text>
      <a href= "/NewAgenda">
        <Button>New Agenda</Button>
      </a>
      <a href= "/NotesArchive">
        <Button>Notes Archive</Button>
      </a>
        
      </Stack>
  );
};

export default Home;
