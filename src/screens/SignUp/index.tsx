import {
    Box,
    Button,
    Center,
    Checkbox,
    FormControl,
    Image,
    Input,
    Stack,
    VStack,
    WarningOutlineIcon
} from "native-base";
import React, { useState } from "react";
import Logo from '../../../assets/logohorizontal.png';
import { ToggleTheme } from "../../components/ToggleTheme";

export function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
      }; 

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
                top={4}
            />
            <Box w="full" p={5}>
                <VStack>
                    <FormControl my={4} isRequired>
                        <Stack mx="4" my="1">
                            <FormControl.Label>Nome Completo</FormControl.Label>
                            <Input type="text" placeholder="Seu nome" onChangeText={(text) => setName(text)} value={name}/>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Email inválido.
                            </FormControl.ErrorMessage>
                        </Stack>
                        <Stack mx="4" my="1">
                            <FormControl.Label>E-mail</FormControl.Label>
                            <Input type="text" placeholder="seu@email.com" onChangeText={(text) => setEmail(text)} value={email}/>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Email inválido.
                            </FormControl.ErrorMessage>
                        </Stack>
                        <Stack mx="4" my="1">
                            <FormControl.Label>Senha</FormControl.Label>
                            <Input type="password" placeholder="Senha" onChangeText={(text) => setPassword(text)} value={password}/>
                            <FormControl.HelperText>
                                Mínimo de 6 caracteres.
                            </FormControl.HelperText>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                São necessários pelo menos 6 caracteres.
                            </FormControl.ErrorMessage>
                        </Stack>
                        <Stack mx="4" my="1">
                            <FormControl.Label>Confirmar Senha</FormControl.Label>
                            <Input type="password" placeholder="Confirmar Senha" onChangeText={(text) => setConfirmPassword(text)} value={confirmPassword}/>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                São necessários pelo menos 6 caracteres.
                            </FormControl.ErrorMessage>
                        </Stack>
                        <Button
                            mt="7"
                            mb="2"
                            colorScheme="cyan"
                            variant={'solid'}
                            onPress={handleSubmit}
                        >
                            Registrar
                        </Button>
                    </FormControl>
                </VStack>
            </Box>
            <Checkbox value="agree">
                Concordo com a política de segurança.
            </Checkbox>
            <ToggleTheme/>
        </Center>
    )
}