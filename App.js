// React screen navigator Code
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Login";
import Signup from "./Signup";
const Stack = createStackNavigator();

export default function App(props) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          // screenOptions={{
          //   header: () => null
          // }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
          // options={{
          //   header: () => null
          // }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }