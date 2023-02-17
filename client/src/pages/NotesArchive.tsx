import * as React from "react";
import { Text, Button } from "@mantine/core";
import TableScrollArea from "../components/AgendaArchiveTable";

const NotesArchive = () => {

    let archiveData: { name: string; email: string; company: string; }[] =[{name: 'emma', email: 'enassero', company: 'ku'}];
  return (
    <>
      <Text>Notes Archive</Text>

      <TableScrollArea data={archiveData}/>
      <a href="/Home">
      <Button>Back</Button>
      </a>
    </>
  );
};
export default NotesArchive;
