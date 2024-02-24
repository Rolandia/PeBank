import { Box, GridItem, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <GridItem
      bg={"#343434"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          py: 6,
        }}
      >
        <Link href={"/conta"}>
          <Text fontSize={"xl"} color="#bc84f7" fontWeight={"600"}>
            Esqueci a senha
          </Text>
        </Link>
        <Link href={"/conta"}>
          <Text fontSize={"xl"} color="#bc84f7" fontWeight={"600"}>
            Não sou cliente
          </Text>
        </Link>
      </Box>
    </GridItem>
  );
}
