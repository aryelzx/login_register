import { Center, HStack, Switch, Text, useColorMode } from "native-base";
import React from "react";

export function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center top={7} _dark={{ bg: "black" }} _light={{ bg: "white" }}>
      <HStack alignItems="center" space={4} mt={5}>
        <Text fontSize="xl">Dark</Text>
        <Switch
          isChecked={colorMode === "light"}
          onToggle={toggleColorMode}
          size="lg"
          aria-label={
            colorMode === "light"
              ? "troque para o tema escuro"
              : "troque para o tema claro"
          }
        />
        <Text fontSize="xl">Light</Text>
      </HStack>
    </Center>
  );
}
