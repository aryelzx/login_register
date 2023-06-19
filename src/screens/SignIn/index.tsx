import { MaterialIcons } from "@expo/vector-icons";
import {
    Box,
    Button,
    Center,
    Checkbox,
    FormControl,
    Heading,
    Icon,
    Image,
    Input,
    VStack,
    WarningOutlineIcon,
} from "native-base";
import React, { useState } from "react";
import Logo from "../../../assets/logohorizontal.png";
import { ToggleTheme } from "../../components/ToggleTheme";

export function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Email", email);
    console.log("Senha", password);
  };

  return (
    <Center height="full" _dark={{ bg: "black" }} _light={{ bg: "white" }}>
      <Image source={Logo} resizeMode="contain" alt="Image Logo" mb={4} />
      <Box width="full" p={5}>
        <Heading
          color="dark.200"
          _dark={{ color: "white" }}
          _light={{ color: "black" }}
        >
          Entrar
        </Heading>
        <VStack>
          <FormControl>
            {" "}
            {/* tratar erro com isInvalid */}
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
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              E-mail inválido.
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              type="password"
              placeholder="senha"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="lock" />}
                  size={5}
                  ml={2}
                  color="muted.400"
                />
              }
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <FormControl.ErrorMessage>Senha inválida.</FormControl.ErrorMessage>
            <FormControl.HelperText>
              Mínimo de 8 caracteres.
            </FormControl.HelperText>
          </FormControl>
          <Button
            mt="7"
            mb="2"
            colorScheme="cyan"
            variant={"solid"}
            onPress={handleSubmit}
          >
            Entrar
          </Button>
          <Button
            onPress={() => navigation.push("Registro")}
            variant={"outline"}
          >
            Registrar
          </Button>
        </VStack>
      </Box>
      <Checkbox mb={-10} value="agree">
        Concordo com a política de segurança.
      </Checkbox>
      <ToggleTheme />
    </Center>
  );
}
