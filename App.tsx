import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, useColorMode } from "native-base";
import { SignUp } from "./src/screens/SigUp";
import { SignIn } from "./src/screens/SignIn";

//CONSERTAR A COR DO HEADERGIT
export default function App() {
  const Stack = createNativeStackNavigator();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={SignIn}
            options={{
              title: 'Login',
              headerStyle: {
                backgroundColor: "#000"
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />
          <Stack.Screen name="Registro" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

