import { GridItem, Image } from "@chakra-ui/react";
import React from "react";

export default function Picture() {
  return (
    <GridItem w={"100%"} h={"100vh"}>
      <Image
        loading="lazy"
        src={
          "https://www.datocms-assets.com/39397/1704720890-nu_core_login.png?h=1080"
        }
        sx={{
          objectFit: "cover",
          objectPosition: "top",
          width: "100%",
          height: "100%",
          borderStyle: "none",
        }}
        alt={"Tela de início"}
      />
    </GridItem>
  );
}
