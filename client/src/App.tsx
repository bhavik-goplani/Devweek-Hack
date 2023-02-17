import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { MantineProvider, Text } from "@mantine/core";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

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
        colorScheme: "dark",
      }} children={undefined}    ></MantineProvider>
  );
}

export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default App;
