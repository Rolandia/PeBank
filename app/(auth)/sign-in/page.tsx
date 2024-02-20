"use client";
import { Box, Grid } from "@chakra-ui/react";

import Logo from "@/public/Logo";
import Link from "next/link";
import Picture from "./components/picture";
import Section from "./components/section";

export default function Home() {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" position="relative">
        <Picture />
        <Section />
      </Grid>
      <Box
        sx={{ position: "absolute", top: 6, left: 6 }}
        width={20}
        height={20}
      >
        <Link href={"/sign-in"}>
          <Logo />
        </Link>
      </Box>
    </>
  );
}
