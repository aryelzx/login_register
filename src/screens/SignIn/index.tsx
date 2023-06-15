import { MaterialIcons } from '@expo/vector-icons';
import {
    Box,
    Button,
    Center,
    Checkbox,
    FormControl,
    HStack,
    Heading,
    Icon,
    Image,
    Input,
    Switch,
    Text,
    VStack,
    WarningOutlineIcon,
    useColorMode
} from "native-base";
import React from "react";
import Logo from '../../../assets/logohorizontal.png';


export function SigIn() {
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
                mb={25}
            />
            <Box width="full" p={5}>
                <Heading
                    color='dark.200'
                    _dark={{ color: "white" }}
                    _light={{ color: "black" }}
                >
                    Entrar
                </Heading>
                <VStack>
                    <FormControl> {/* tratar erro com isInvalid */}
                        <FormControl.Label>E-mail</FormControl.Label>
                        <Input
                            placeholder="seu@email.com"
                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons name="person" />}
                                    size={5}
                                    ml={2}
                                    color="muted.400"
                                />
                            }
                        />
                        <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />
                            }>
                            E-mail inválido.
                        </FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl>
                        <FormControl.Label>Senha</FormControl.Label>
                        <Input
                            placeholder="senha"
                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons name="lock" />}
                                    size={5}
                                    ml={2}
                                    color="muted.400"
                                />
                            }
                        />
                        <FormControl.ErrorMessage>
                            Senha inválida.
                        </FormControl.ErrorMessage>
                        <FormControl.HelperText>
                            Mínimo de 8 caracteres.
                        </FormControl.HelperText>
                    </FormControl>
                    <Button
                        mt="7"
                        colorScheme="cyan"
                        variant={'solid'}
                    >
                        Entrar
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
                    aria-label={
                        colorMode === "light" ? "troque para o tema escuro" : "troque para o tema claro"
                    }
                />
            <Text fontSize="xl">Light</Text>
            </HStack>
        </Center>
    )
}