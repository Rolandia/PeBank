import {
    Box,
    Button,
    Container,
    Input,
    Stack,
    Text,
    useTheme
} from "@chakra-ui/react";

export default function Form() {
  const theme = useTheme();
  return (
    <Box
      bgColor={theme.colors.black}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
      height={"100%"}
    >
      <Container
        sx={{ maxWidth: "430px", margin: "auto", flex: 1, padding: "24px" }}
      >
        <form>
          <Stack
            sx={{
              justifyContent: "center",
            }}
            spacing={4}
          >
            <Text fontSize={"3xl"} color={theme.colors.whiteAlpha[900]}>
              Acesse sua conta
            </Text>
            <Text color={theme.colors.gray[50]}>CPF</Text>
            <Input
              variant={"flushed"}
              border={"none"}
              borderBottom={"1px solid"}
              color={theme.colors.whiteAlpha[900]}
            />
            <Text color={theme.colors.gray[50]}>Senha</Text>
            <Input
              variant={"flushed"}
              border={"none"}
              borderBottom={"1px solid"}
              color={theme.colors.whiteAlpha[900]}
            />
            <Button sx={{ width: "100%" }}>Continuar</Button>
          </Stack>
        </form>
      </Container>
    </Box>
  );
}
