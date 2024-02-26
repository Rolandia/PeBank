"use client";

import {
    Box,
    Container,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    Input,
    Stack,
    Text,
    useTheme
} from "@chakra-ui/react";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import CustomButton from "@/app/components/customButton";
import { useEffect, useState } from "react";

const signInSchema = z.object({
  documentId: z.string().length(11, 'Este campo é obrigatório'),
  password: z.string().min(8, 'Este campo é obrigatório')
}).required();

type SignInSchema = z.infer<typeof signInSchema>;

export default function Form() {
  const theme = useTheme();
  const [disabled, setDisabled] = useState<boolean>(true);

  const { register, handleSubmit, watch, setError, clearErrors, formState: { errors } } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema)
  });

  const handleSignIn = (data: SignInSchema) => {
    console.log(data);
  };

  const watchDocumentId = watch('documentId');
  const watchPassword = watch('password');

  useEffect(() => {
    setDisabled(true);

    if (watchDocumentId !== '' && watchPassword !== '') {
      setDisabled(false);
    } 
  }, [watch()]);

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
        <form onSubmit={handleSubmit(handleSignIn)}>
          <Stack
            sx={{
              justifyContent: "center",
            }}
            spacing={4}
          >
            <Text fontSize={"3xl"} color={theme.colors.whiteAlpha[900]}>
              Acesse sua conta
            </Text>
            <FormControl isInvalid={errors?.documentId ? true : false}>
              <Text color={theme.colors.gray[50]}>CPF</Text>
              <Input
                variant={"flushed"}
                border={"none"}
                borderBottom={"1px solid"}
                color={theme.colors.whiteAlpha[900]}
                {... register('documentId', {
                  onBlur: (e) => {
                    if (e.target.value === '') {
                      setError('documentId', {
                        message: 'Este campo é obrigatório'
                      });
                    } else {
                      clearErrors('documentId');
                    }
                  }
                })}
              />
              {errors?.documentId && (
                <FormErrorMessage>
                  {errors?.documentId?.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors?.password ? true : false}>
              <Text color={theme.colors.gray[50]}>Senha</Text>
              <Input
                type="password"
                variant={"flushed"}
                border={"none"}
                borderBottom={"1px solid"}
                color={theme.colors.whiteAlpha[900]}
                {... register('password', {
                  onBlur: (e) => {
                    if (e.target.value === '') {
                      setError('password', {
                        message: 'Este campo é obrigatório'
                      });
                    } else {
                      clearErrors('password');
                    }
                  }
                })}
              />
              {errors?.password && (
                <FormErrorMessage>
                   {errors?.password?.message}
                </FormErrorMessage>
              )}
              <FormHelperText> Possui 8 caracteres ou mais </FormHelperText>
            </FormControl>
            <CustomButton
              type="submit"
              disabled={disabled}
            >
              Continuar
            </CustomButton>
          </Stack>
        </form>
      </Container>
    </Box>
  );
}
