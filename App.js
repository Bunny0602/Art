import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/LoginScreen";
import Home from "./components/HomeScreen";
import Picasso from "./components/picasso";
import Aboutus from "./components/Aboutus";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Picasso"
          component={Picasso}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Aboutus"
          component={Aboutus}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
