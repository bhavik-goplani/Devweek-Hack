import * as React from "react";
import { TextInputField } from "../components/TextInputField";

import { Text, Button } from "@mantine/core";
import Home from "./Home";

const Authentication = () => {
  return (
    <>
      <Text style={{ marginBottom: 20 }} size="lg">
        Getting started
      </Text>
      <TextInputField placeholderText="Your name" label="Full name" />
      <TextInputField placeholderText="Your email" label="Email address" />
      <a href="/Home">
        <Button>Next</Button>
      </a>
    </>
  );
};

export default Authentication;
