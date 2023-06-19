import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useColorMode } from "native-base";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";

export function RouterContainer() {
  const Tab = createBottomTabNavigator();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: colorMode },
        }}
        initialRouteName="Login"
      >
        <Tab.Screen
          name="Login"
          component={SignIn}
          options={{
            title: "Login",
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <MaterialCommunityIcons name="home" size={size} color={color} />
              );
            },
            tabBarStyle: {
              backgroundColor: colorMode === "light" ? "white" : "black",
            },
          }}
        />
        <Tab.Screen
          name="Registro"
          component={SignUp}
          options={{
            title: "Registrar",
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="person-add" size={size} color={color} />;
            },
            tabBarStyle: {
              backgroundColor: colorMode === "light" ? "white" : "black",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
