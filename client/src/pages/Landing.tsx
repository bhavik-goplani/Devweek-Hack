import * as React from "react";
import {Text, Button} from "@mantine/core";

const Landing = () => {
    return (
        <>
        
        <Text style={{marginBottom:10}}>Welcome to your new agenda assistant.</Text>
        <a href= "/Authentication">
            <Button>Get Started</Button>
        </a>
        
        </>
        
    )
}

export default Landing;