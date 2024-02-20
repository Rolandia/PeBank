import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Footer from "./footer";
import Form from "./form";

export default function Section() {
  return (
    <GridItem w={"100%"} h={"100vh"}>
      <Grid templateRows="1fr 13vh" height={"100%"}>
        <Form />
        <Footer />
      </Grid>
    </GridItem>
  );
}
