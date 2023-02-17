import { useState } from "react";
import React from "react";
import "./App.css";


import Landing from "./pages/Landing";
import Home from "./pages/Home";
import NewAgenda from "./pages/NewAgenda";
import NotesArchive from "./pages/NotesArchive";
import Authentication from "./pages/Authentication";

import { MantineProvider, Text } from "@mantine/core";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Courier",
        fontFamilyMonospace: " Courier",
        headings: {
          fontFamily: "Courier New",
          sizes: {
            h1: { fontWeight: 100, fontSize: 32, lineHeight: 1.4 },
            h2: { fontSize: 28, lineHeight: 1.5 },
            // ...up to h6
            h6: { fontWeight: 900 },
          },
        },
        colorScheme: "light",
      }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/NewAgenda" element={<NewAgenda />} />
          <Route path="/NotesArchive " element={<NotesArchive  />} />
          <Route path="/Authentication" element={<Authentication />} />
        </Routes>
        
      </MantineProvider>

      
  );
}

export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default App;
