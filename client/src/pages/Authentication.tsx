import * as React from "react";
import { TextInputField } from "../components/TextInputField";

import {Text} from "@mantine/core";

const Authentication = () => {
    return (
        <>
        <Text>Getting started</Text>
        <TextInputField placeholderText="Your name" label="Full name"/>
        <TextInputField placeholderText="Your email" label="Email address"/>
        </>
    )
}

export default Authentication;