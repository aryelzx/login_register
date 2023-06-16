import {
    Box,
    Button,
    Center,
    Checkbox,
    FormControl,
    HStack,
    Image,
    Input,
    Stack,
    Switch,
    Text,
    VStack,
    WarningOutlineIcon,
    useColorMode
} from "native-base";
import React from "react";
import Logo from '../../../assets/logohorizontal.png';

export function SignUp() {
    const { colorMode, toggleColorMode } = useColorMode();
    
    return (
        <Center
            height="full"
            _dark={{ bg: "black" }}
            _light={{ bg: "white" }}
        >
            <Image
                source={Logo}
                resizeMode='contain'
                alt='Image Logo'
            />
            <Box w="full" p={5}>
                <VStack>
                    <FormControl isRequired>
                        <Stack mx="4">
                            <FormControl.Label>Nome Completo</FormControl.Label>
                            <Input type="text" placeholder="Seu nome" />
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Email inválido.
                            </FormControl.ErrorMessage>
                        </Stack>
                        <Stack mx="4">
                            <FormControl.Label>E-mail</FormControl.Label>
                            <Input type="text" placeholder="seu@email.com" />
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Email inválido.
                            </FormControl.ErrorMessage>
                        </Stack>
                        <Stack mx="4">
                            <FormControl.Label>Senha</FormControl.Label>
                            <Input type="password" placeholder="Senha" />
                            <FormControl.HelperText>
                                Mínimo de 8 caracteres.
                            </FormControl.HelperText>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Atleast 6 characters ar\e required.
                            </FormControl.ErrorMessage>
                        </Stack>
                        <Stack mx="4">
                            <FormControl.Label>Confirmar Senha</FormControl.Label>
                            <Input type="password" placeholder="Confirmar Senha" />
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Atleast 6 characters ar\e required.
                            </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>
                    <Button
                        mt="7"
                        mb="2"
                        colorScheme="cyan"
                        variant={'solid'}
                    >
                        Registrar
                    </Button>
                </VStack>
            </Box>
            <Checkbox value="agree">
                Concordo com a política de segurança.
            </Checkbox>
            <HStack alignItems="center" space={4} mt={5}>
                <Text fontSize="xl">Dark</Text>
                <Switch
                    isChecked={colorMode === "light"}
                    onToggle={toggleColorMode}
                    size="lg"
                    aria-label={
                        colorMode === "light" ? "troque para o tema escuro" : "troque para o tema claro"
                    }
                />
                <Text fontSize="xl">Light</Text>
            </HStack>
        </Center>
    )
}