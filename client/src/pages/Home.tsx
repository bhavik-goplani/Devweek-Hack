import * as React from "react";
import { Text, Button } from "@mantine/core";
import AgendaDataNestedList from "../components/AgendaDataNestedList";

const Home = () => {
  return (
    <>
      <Text>Home</Text>
      <a href= "/NewAgenda">
        <Button>New Agenda</Button>
      </a>
      <a href= "/NotesArchive">
        <Button>Notes Archive</Button>
      </a>
        
    </>
  );
};

export default Home;
